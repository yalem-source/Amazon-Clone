
import React, { useContext } from "react";
import LayOut from "../../LayOut/LayOut";
import { DataContext } from "../../DataProvider/DataProvider";
import ProductCard from "../../Product/ProductCard";
import CurrencyFormat from "../../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";
import { Type } from "../../../Utility/Actiontype";
import { IoArrowDown, IoArrowUp } from "react-icons/io5";

function Cart() {
	const [{ basket, user }, dispatch] = useContext(DataContext);

	const total = basket.reduce(
		(amount, item) => amount + item.price * item.amount,
		0
	);

	const increment = (item) => {
		dispatch({
			type: Type.ADD_TO_BASKET,
			item,
		});
	};

	const decrement = (id) => {
		dispatch({
			type: Type.REMOVE_FROM_BASKET,
			id,
		});
	};

	return (
		<LayOut>
			<section className={classes.container}>
				<div className={classes.cart__container}>
					<h2>Hello</h2>
					<h3>Your Shopping Basket</h3>
					<hr />
					{basket?.length === 0 ? (
						<p>Oops! No items in your basket.</p>
					) : (
						basket.map((item, i) => (
							<section key={i} className={classes.cart_product}>
								<ProductCard
									product={item}
									renderDesc={true}
									renderAdd={false}
									flex={true}
								/>
								<div className={classes.btn_container}>
									<button
										className={classes.btn}
										onClick={() => increment(item)}
									>
										<IoArrowUp size={20} />
									</button>
									<span>{item.amount}</span>
									<button onClick={() => decrement(item.id)}>
										<IoArrowDown size={20} />
									</button>
								</div>
							</section>
						))
					)}
				</div>

				{basket?.length !== 0 && (
					<div className={classes.subtotal}>
						<div>
							<p>Subtotal ({basket.length} items)</p>
							<CurrencyFormat amount={total} />
						</div>
						<span>
							<input type="checkbox" />
							<small>This order contains a gift</small>
						</span>
						<Link to="/Payments">Continue to checkout</Link>
					</div>
				)}
			</section>
		</LayOut>
	);
}

export default Cart;
