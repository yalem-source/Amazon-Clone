import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/Actiontype";

function ProductCard({ product, flex, renderDesc, renderAdd }) {
	const { image, title, id, rating, price, description } = product;
	// console.log(Type);
	const [state, dispatch] = useContext(DataContext);

	const addToCart = () => {
		dispatch({
			type: Type.ADD_TO_BASKET,
			item: { image, title, id, rating, price, description },
		});
	};

	return (
		<div
			className={`${classes.card__container} ${
				flex ? classes.product__flexed : ""
			}`}
		>
			<Link to={`/products/${id}`}>
				<img src={image} alt={title} />
			</Link>
			<div className={classes.product_desc}>
				<h3>{title}</h3>
				{renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
				<div className={classes.rating}>
					<Rating value={rating?.rate || 0} precision={0.1} readOnly />
					<small>{rating?.count || 0}</small>
				</div>
				<div>
					<CurrencyFormat amount={price} />
				</div>
				{renderAdd && (
					<button
						className={`${classes.button} ${flex ? classes.button_flexed : ""}`}
						onClick={addToCart}
					>
						Add to cart
					</button>
				)}
			</div>
		</div>
	);
}
export default ProductCard;
