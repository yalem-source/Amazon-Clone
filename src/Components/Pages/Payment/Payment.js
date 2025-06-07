// import React, { useContext, useState } from "react";
// // import classes from "./Payment.module.css"
// import LayOut from "../../LayOut/LayOut";
// // import { ClassNames } from '@emotion/react'
// import { DataContext } from "../../DataProvider/DataProvider";
// import classes from "../Payment/Payment.module.css";
// import ProductCard from "../../Product/ProductCard";
// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// import CurrencyFormat from "../../CurrencyFormat/CurrencyFormat";
// // import { axiosInstance } from "../../../Api/axios";  Bellow is the from chatgpt
// import axiosInstance from "../../Api/axios";
// import { db } from "../../../Utility/firebase";
// import { useNavigate } from "react-router-dom";
// import Clipboard from "clipboard";

// function Payment({ total }) {
// 	const [{ user, basket }] = useContext(DataContext);
// 	console.log(user);
// 	const totalItem = basket?.reduce((amount, item) => {
// 		return item.amount + amount;
// 	}, 0);
// 	const [cardError, setCardError] = useState(null);
// 	const [processing, setProcessing] = useState(false);
// 	const stripe = useStripe();
// 	const Element = useElements();
// 	const navigate = useNavigate();

// 	const handleChange = (e) => {
// 		// console.log(e);
// 		e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
// 	};

// 	const handlePayment = async (e) => {
// 		e.preventDefault();

// 		try {
// 			setProcessing(true);
// 			// backened// functions----contactto the client secret
// 			const response = await axiosInstance({
// 				method: "POST",
// 				url: `/payment/create?total=${total * 100}`,
// 			});
// 			// console.log(response.data)
// 			const clientSecret = response.data?.clientSecret;
// 			//Client side reactside confirmation)
// 			const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
// 				payment_method: {
// 					card: Element.getElement(CardElement),
// 				},
// 			});
// 			// console, log(confirmation);

// 			// after the confirmation -----order firestore database save. clear

// 			await db
// 				.collection("users")
// 				.doc(user.uid)
// 				.collection("orders")
// 				.doc(paymentIntent.id)
// 				.set({
// 					basket: basket,
// 					amount: paymentIntent.amount,
// 					created: paymentIntent.created,
// 				}),
// 				setProcessing(false);
// 			navigate("/orders", { state: { msg: "you have placed new Order" } });
// 		} catch (error) {}
// 		// console.log(error);
// 		setProcessing(false);
// 	};
// 	return (
// 		<LayOut>
// 			{/* Header */}
// 			<div className={classes.Payment__header}>
// 				{" "}
// 				CheckOut({totalItem}) items{" "}
// 			</div>
// 			{/* payment */}
// 			<section>
// 				{/* address */}
// 				<div className={classes.flex}>
// 					<h3> Delivery Address</h3>
// 					<div>
// 						<div> {user?.email}</div>
// 						<div> 12345 react lane</div>
// 						<div> Chucago, IL</div>
// 					</div>
// 				</div>
// 				<hr />
// 				{/* product */}
// 				<div className={classes.flex}>
// 					<h3> Review items and delivery</h3>
// 					<div>
// 						{basket?.map((item) => (
// 							<ProductCard product={item} flex={true} />
// 						))}
// 					</div>
// 				</div>
// 				<h />
// 				{/* card form */}
// 				<div className={classes.flex}>
// 					<h3> Payment Methode</h3>
// 					<div className={classes.payment__card__container}>
// 						<div className={classes.payment__details}>
// 							<form onSubmit={handlePayment}>
// 								{/* error */}
// 								{cardError && (
// 									<small style={{ color: "red" }}>{cardError}</small>
// 								)}
// 								{/* card elemnet  */}
// 								<CardElement onChange={handleChange} />

// 								{/* price */}
// 								<div className={classes.Payment__price}>
// 									<div>
// 										<span>
// 											<p>
// 												Total Order | <CurrencyFormat amount={total} />
// 											</p>
// 										</span>
// 									</div>
// 									<button type="submit">
// 										{processing ? (
// 											<div className={classes.loading}>
// 												<Clipboard color="gray" size={12} />
// 												<p> PleaseWait...</p>
// 											</div>
// 										) : (
// 											"	Pay Now"
// 										)}
// 									</button>
// 								</div>
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 		</LayOut>
// 	);
// }

// export default Payment;

// import React, { useContext, useState } from "react";
// // import classes from "./Payment.module.css"
// import LayOut from "../../LayOut/LayOut";
// // import { ClassNames } from '@emotion/react'
// import { DataContext } from "../../DataProvider/DataProvider";
// import classes from "../Payment/Payment.module.css";
// import ProductCard from "../../Product/ProductCard";
// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
// import CurrencyFormat from "../../CurrencyFormat/CurrencyFormat";
// // import { axiosInstance } from "../../../Api/axios";
// import axiosInstance from "../../../Api/axios";
// import { db } from "../../../Utility/firebase";
// import { useNavigate } from "react-router-dom";
// import { ClipLoader } from "react-spinners";
// import { Type } from "../../../Utility/Actiontype";

// function Payment({ total }) {
// 	const [{ user, basket }, dispatch] = useContext(DataContext);
// 	console.log(user);
// 	const totalItem = basket?.reduce((amount, item) => {
// 		return item.amount + amount;
// 	}, 0);
// 	const [cardError, setCardError] = useState(null);
// 	const [processing, setProcessing] = useState(false);
// 	const stripe = useStripe();
// 	const elements = useElements();
// 	const navigate = useNavigate();

// 	const handleChange = (e) => {
// 		// console.log(e);
// 		e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
// 	};

// 	const handlePayment = async (e) => {
// 		e.preventDefault();

// 		try {
// 			setProcessing(true);
// 			// backened// functions----contactto the client secret
// 			const response = await axiosInstance({
// 				method: "POST",
// 				url: `/payment/create?total=${total * 100}`,
// 			});
// 			// console.log(response.data)
// 			const clientSecret = response.data?.clientSecret;
// 			//Client side reactside confirmation)
// 			const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
// 				payment_method: {
// 					card: elements.getElement(CardElement),
// 				},
// 			});
// 			// console, log(confirmation);

// 			// after the confirmation -----order firestore database save. clear

// 			await db
// 				.collection("users")
// 				.doc(user.uid)
// 				.collection("orders")
// 				.doc(paymentIntent.id)
// 				.set({
// 					basket: basket,
// 					amount: paymentIntent.amount,
// 					created: paymentIntent.created,
// 				});

// 			// empty basket
// 			dispatch({ type: Type.EMPTY.BASKET });

// 			setProcessing(false);
// 			navigate("/orders", { state: { msg: "you have placed new Order" } });
// 		} catch (error) {
// 			// console.log(error);
// 			setProcessing(false);
// 		}
// 	};
// 	return (
// 		<LayOut>
// 			{/* Header */}
// 			<div className={classes.Payment__header}>
// 				{/* {" "} */}
// 				CheckOut({totalItem}) items
// 				{/* {" "} */}
// 			</div>
// 			{/* payment */}
// 			<section>
// 				{/* address */}
// 				<div className={classes.flex}>
// 					<h3> Delivery Address</h3>
// 					<div>
// 						<div> {user?.email}</div>
// 						<div> 12345 react lane</div>
// 						<div> Chucago, IL</div>
// 					</div>
// 				</div>
// 				<hr />
// 				{/* product */}
// 				<div className={classes.flex}>
// 					<h3> Review items and delivery</h3>
// 					<div>
// 						{basket?.map((item) => (
// 							<ProductCard product={item} flex={true} key={item.id} />
// 						))}
// 					</div>
// 				</div>
// 				<hr />
// 				{/* card form */}
// 				<div className={classes.flex}>
// 					<h3> Payment Methode</h3>
// 					<div className={classes.payment__card__container}>
// 						<div className={classes.payment__details}>
// 							<form onSubmit={handlePayment}>
// 								{/* error */}
// 								{cardError && (
// 									<small style={{ color: "red" }}>{cardError}</small>
// 								)}
// 								{/* card elemnet  */}
// 								<CardElement onChange={handleChange} />

// 								{/* price */}
// 								<div className={classes.Payment__price}>
// 									<div>
// 										<span>
// 											<p>
// 												Total Order | <CurrencyFormat amount={total} />
// 											</p>
// 										</span>
// 									</div>
// 									<button type="submit">
// 										{processing ? (
// 											<div className={classes.loading}>
// 												<ClipLoader color="gray" size={12} />
// 												<p> PleaseWait...</p>
// 											</div>
// 										) : (
// 											" Pay Now"
// 										)}
// 									</button>
// 								</div>
// 							</form>
// 						</div>
// 					</div>
// 				</div>
// 			</section>
// 		</LayOut>
// 	);
// }

// export default Payment;
// ************The top  code is working firn*******************************

import React, { useContext, useState } from "react";
import LayOut from "../../LayOut/LayOut";
import { DataContext } from "../../DataProvider/DataProvider";
import classes from "../Payment/Payment.module.css";
import ProductCard from "../../Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../CurrencyFormat/CurrencyFormat";
import axiosInstance from "../../../Api/axios";
import { db } from "../../../Utility/firebase";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { Type } from "../../../Utility/Actiontype";

function Payment() {
	const [{ user, basket }, dispatch] = useContext(DataContext);
	const totalItem = basket?.reduce((amount, item) => {
		return item.amount + amount;
	}, 0);
	const total = basket.reduce(
		(amount, item) => item.price * item.amount + amount,
		0
	);
	const [cardError, setCardError] = useState(null);
	const [processing, setProcessing] = useState(false);
	const stripe = useStripe();
	const elements = useElements();
	const navigate = useNavigate();

	// Add this check to ensure Stripe is loaded
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

	const handleChange = (e) => {
		e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
	};

	const handlePayment = async (e) => {
		e.preventDefault();

		// Validate card element exists
		const cardElement = elements.getElement(CardElement);
		if (!cardElement) {
			setCardError("Card information is incomplete");
			return;
		}

		try {
			setProcessing(true);
			setCardError(null);

			// Request payment intent
			const response = await axiosInstance({
				method: "POST",
				url: `/payment/create?total=${total * 100}`,
			});

			const clientSecret = response.data?.clientSecret;
			if (!clientSecret) {
				throw new Error("Failed to get payment authorization");
			}

			// Confirm payment with Stripe
			const { paymentIntent, error } = await stripe.confirmCardPayment(
				clientSecret,
				{
					payment_method: {
						card: cardElement,
					},
				}
			);

			if (error) {
				throw error;
			}

			// Save order to Firestore
			await db
				.collection("users")
				.doc(user.uid)
				.collection("orders")
				.doc(paymentIntent.id)
				.set({
					basket: basket,
					amount: paymentIntent.amount,
					created: paymentIntent.created,
				});

			// Clear basket and navigate
			dispatch({ type: Type.EMPTY.BASKET });
			navigate("/orders", { state: { msg: "You have placed a new Order" } });
		} catch (error) {
			console.error("Payment error:", error);
			setCardError(error.message || "Payment failed. Please try again.");
		} finally {
			setProcessing(false);
		}
	};

	return (
		<LayOut>
			<div className={classes.Payment__header}>CheckOut({totalItem}) items</div>

			<section>
				<div className={classes.flex}>
					<h3>Delivery Address</h3>
					<div>
						<div>{user?.email}</div>
						<div>123 React Lane</div>
						<div>Chicago, IL</div>
					</div>
				</div>
				<hr />

				<div className={classes.flex}>
					<h3>Review items and delivery</h3>
					<div>
						{basket?.map((item) => (
							<ProductCard product={item} flex={true} key={item.id} />
						))}
					</div>
				</div>
				<hr />

				<div className={classes.flex}>
					<h3>Payment Method</h3>
					<div className={classes.payment__card__container}>
						<div className={classes.payment__details}>
							<form onSubmit={handlePayment}>
								{cardError && (
									<div
										style={{
											color: "red",
											padding: "10px",
											margin: "10px 0",
											border: "1px solid red",
											borderRadius: "4px",
										}}
									>
										{cardError}
									</div>
								)}

								<CardElement onChange={handleChange} />

								<div className={classes.Payment__price}>
									<div>
										<span style={{ display: "flex", gap: "10px" }}>
											Total Order | <CurrencyFormat amount={total} />
											         
										</span>
										{/* <span>
											{/* <p> */}
										{/* Total Order | <CurrencyFormat amount={total} /> */}
										{/* </p> */}
										{/* </span> */}
									</div>
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
				</div>
			</section>
		</LayOut>
	);
}

export default Payment;
