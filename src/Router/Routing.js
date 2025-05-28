// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Landing from "../Components/Pages/Landing/Landing";
// import SignIn from "../Components/Pages/Auth/SignUp";
// import Paymnet from "../Components/Pages/Payment/Payment";
// import Orders from "../Components/Pages/Orders/Orders";
// import Cart from "../Components/Pages/Cart/Cart";
// import ProductDetail from "../Components/ProductDetail/ProductDetail";
// import Results from "../Components/Results/Results";

// function Routing() {
// 	return (
// 		<Router>
// 			<Routes>
// 				<Route path="/" element={<Landing />} />
// 				<Route path="/auth" element={<SignIn />} />
// 				<Route path="/Payments" element={<Paymnet />} />
// 				<Route path="/Orders" element={<Orders />} />
// 				<Route path="/category/:categoryName" element={<Results />} />
// 				<Route path="/products/:productId" element={<ProductDetail />} />
// 				<Route path="/Cart" element={<Cart />} />
// 			</Routes>
// 		</Router>
// 	);
// }

// export default Routing;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../Components/Pages/Landing/Landing";
import SignIn from "../Components/Pages/Auth/SignUp";
import Payment from "../Components/Pages/Payment/Payment";
import Orders from "../Components/Pages/Orders/Orders";
// import Cart from "../Components/Pages/Cart/Cart";
import Cart from "../Components/Pages/Cart/Cart";
import ProductDetail from "../Components/ProductDetail/ProductDetail";
import Results from "../Components/Results/Results";

function Routing() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/auth" element={<SignIn />} />
				<Route path="/Payments" element={<Payment />} />
				<Route path="/orders" element={<Orders />} />
				<Route path="/category/:categoryName" element={<Results />} />
				<Route path="/products/:productId" element={<ProductDetail />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="*" element={<div>404 - Page Not Found</div>} />
			</Routes>
		</Router>
	);
}

export default Routing;
