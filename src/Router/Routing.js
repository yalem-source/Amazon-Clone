//
import React from "react";
import {
	HashRouter as Router,
	Routes,
	Route,
	redirect,
} from "react-router-dom";
import Landing from "../Components/Pages/Landing/Landing";
import Auth from "../Components/Pages/Auth/Auth";
import Payment from "../Components/Pages/Payment/Payment";
import Orders from "../Components/Pages/Orders/Orders";
// import Cart from "../Components/Pages/Cart/Cart";
import Cart from "../Components/Pages/Cart/Cart";
import ProductDetail from "../Components/ProductDetail/ProductDetail";

import Results from "../Components/Results/Results";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "../Components/Product/ProtectedRoute/ProtectedRoute";
const stripePromise = loadStripe(
	"pk_test_51RVFCHQsQ6hJQN4uxJ9u1msyqWU8CTl5jHFVuzCuV0Ro6KjjjQPwPzCvp5HZKulHXbw0EDmxSTZyoWHF4U5luar7000sMHqO1V"
);

function Routing() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/auth" element={<Auth />} />
				<Route
					path="/Payments"
					element={
						<ProtectedRoute msg={"you must log in to pay"}>
							redirect={"/payments"}
							<Elements stripe={stripePromise}>
								<Payment />
							</Elements>
						</ProtectedRoute>
					}
				/>
				<Route
					path="/orders"
					element={
						<ProtectedRoute
							msg={"you must log in to to access your orders"}
							redirect={"/payments"}
						>
							<Orders />
						</ProtectedRoute>
					}
				/>
				<Route path="/category/:categoryName" element={<Results />} />
				<Route path="/products/:productId" element={<ProductDetail />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="*" element={<div>404 - Page Not Found</div>} />
			</Routes>
			// //{" "}
		</Router>
	);
}

export default Routing;
//
//
//
//
//  *********************Below is Chatgpt

// import React from "react";
// import {
// 	BrowserRouter as Router,
// 	Routes,
// 	Route,
// 	Navigate,
// } from "react-router-dom";
// import Landing from "../Components/Pages/Landing/Landing";
// import Auth from "../Components/Pages/Auth/Auth";
// import Payment from "../Components/Pages/Payment/Payment";
// import Orders from "../Components/Pages/Orders/Orders";
// import Cart from "../Components/Pages/Cart/Cart";
// import ProductDetail from "../Components/ProductDetail/ProductDetail";
// import Results from "../Components/Results/Results";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import ProtectedRoute from "../Components/Product/ProtectedRoute/ProtectedRoute";

// const stripePromise = loadStripe(
// 	"pk_test_51RVFCHQsQ6hJQN4uxJ9u1msyqWU8CTl5jHFVuzCuV0Ro6KjjjQPwPzCvp5HZKulHXbw0EDmxSTZyoWHF4U5luar7000sMHqO1V"
// );

// function Routing() {
// 	return (
// 		<Router>
// 			<Routes>
// 				<Route path="/" element={<Landing />} />
// 				<Route path="/auth" element={<Auth />} />
// 				<Route
// 					path="/payments"
// 					element={
// 						<ProtectedRoute msg={"you must log in to pay"} redirectPath="/auth">
// 							<Elements stripe={stripePromise}>
// 								<Payment />
// 							</Elements>
// 						</ProtectedRoute>
// 					}
// 				/>
// 				<Route
// 					path="/orders"
// 					element={
// 						<ProtectedRoute
// 							msg={"you must log in to access your orders"}
// 							redirectPath="/auth"
// 						>
// 							<Orders />
// 						</ProtectedRoute>
// 					}
// 				/>
// 				<Route path="/category/:categoryName" element={<Results />} />
// 				<Route path="/products/:productId" element={<ProductDetail />} />
// 				<Route path="/cart" element={<Cart />} />
// 				<Route path="*" element={<Navigate to="/" />} />
// 			</Routes>
// 		</Router>
// 	);
// }

// export default Routing;
