import React, { useContext, useState } from "react";
import LayOut from "../../LayOut/LayOut";
import { DataContext } from "../../DataProvider/DataProvider";
import classes from "./Payment.module.css";
import ProductCard from "../../Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../CurrencyFormat/CurrencyFormat";
import axiosInstance from "../../../Api/axios";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Type } from "../../../Utility/Actiontype";

// Firestore modular imports
import { db } from "../../../Utility/firebase";
import { doc, setDoc } from "firebase/firestore";

function Payment() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const [cardError, setCardError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  // Calculate total items and amount
  const totalItem = basket?.reduce((count, item) => count + item.amount, 0);
  const total = basket.reduce((sum, item) => sum + item.price * item.amount, 0);

  const handleChange = (e) => {
    setCardError(e?.error?.message || "");
  };

 // ... (previous imports remain the same)

const handlePayment = async (e) => {
  e.preventDefault();

  // Enhanced validation checks
  if (!user || !user.uid) {
    setCardError("You must be logged in to make a payment");
    return;
  }

  if (!stripe || !elements) {
    setCardError("Payment system is not ready. Please try again later.");
    return;
  }

  const cardElement = elements.getElement(CardElement);
  if (!cardElement) {
    setCardError("Card information is incomplete.");
    return;
  }

  try {
    setProcessing(true);
    setCardError(null);

    // Step 1: Create PaymentIntent
    const response = await axiosInstance.post(`/payment/create?total=${total * 100}`);
    const clientSecret = response.data?.clientSecret;

    if (!clientSecret) {
      throw new Error("Payment authorization failed. No client secret returned.");
    }

    // Step 2: Confirm payment
    const { paymentIntent, error } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: { card: cardElement },
    });

    if (error) throw error;

    // Debugging log
    console.log(`Attempting to write to: users/${user.uid}/orders/${paymentIntent.id}`);

    // Step 3: Save order
    const orderRef = doc(db, "users", user.uid, "orders", paymentIntent.id);
    await setDoc(orderRef, {
      basket,
      amount: paymentIntent.amount,
      created: paymentIntent.created,
      status: 'completed'
    });

    // Step 4: Clear basket and redirect
    dispatch({ type: Type.EMPTY_BASKET });
    navigate("/orders", { state: { msg: "You have placed a new Order" } });

  } catch (err) {
    console.error("Full payment error:", {
      message: err.message,
      stack: err.stack,
      code: err.code
    });
    setCardError(err.message || "Payment failed. Please try again.");
  } finally {
    setProcessing(false);
  }
};
  // Render loading if Stripe not ready
  if (!stripe || !elements) {
    return (
      <LayOut>
        <div className={classes.loading}>
          <ClipLoader color="gray" size={50} />
          <p>Loading payment system...</p>
        </div>
      </LayOut>
    );
  }

  return (
    <LayOut>
      <div className={classes.Payment__header}>CheckOut ({totalItem} items)</div>

      <section>
        {/* Delivery Address */}
        <div className={classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />

        {/* Review Items */}
        <div className={classes.flex}>
          <h3>Review Items</h3>
          <div>
            {basket.map((item) => (
              <ProductCard product={item} flex key={item.id} />
            ))}
          </div>
        </div>
        <hr />

        {/* Payment Form */}
        <div className={classes.flex}>
          <h3>Payment Method</h3>
          <div className={classes.payment__card__container}>
            <form onSubmit={handlePayment} className={classes.payment__details}>
              {cardError && (
                <div className={classes.errorBox}>{cardError}</div>
              )}
              <CardElement onChange={handleChange} />
              <div className={classes.Payment__price}>
                <span>
                  Total Order | <CurrencyFormat amount={total} />
                </span>
                <button
                  type="submit"
                  disabled={!stripe || processing}
                  style={{
                    cursor: !stripe || processing ? "not-allowed" : "pointer",
                  }}
                >
                  {processing ? (
                    <div className={classes.loading}>
                      <ClipLoader color="gray" size={12} />
                      <p>Processing...</p>
                    </div>
                  ) : (
                    "Pay Now"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;