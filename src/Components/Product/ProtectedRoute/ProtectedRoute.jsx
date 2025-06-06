// import React, { useContext, useEffect } from "react";
// import { redirect, useNavigate } from "react-router-dom";
// import { DataContext } from "../../DataProvider/DataProvider";
// // import { Children } from "react";
// import LayOut from "../../LayOut/LayOut";

// const ProtectedRoute = ({ Children, msg, redirect }) => {
// 	const navigate = useNavigate;
// 	const [{ user }, dispatch] = useContext(DataContext);

// 	useEffect(() => {
// 		if (!user) {
// 			navigate("/auth", { state: { msg, redirect } });
// 		}
// 	}, [user]);

// 	return <div>Protected</div>;
// };

// // paymnet------/auth(/home)

// export default ProtectedRoute;

import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../DataProvider/DataProvider";

const ProtectedRoute = ({ children, msg, redirect }) => {
	const navigate = useNavigate(); // ✅ Call useNavigate as a function
	const [{ user }] = useContext(DataContext);

	useEffect(() => {
		if (!user) {
			navigate("/auth", {
				state: { msg, redirect },
			});
		}
	}, [user, navigate, msg, redirect]); // ✅ include all dependencies

	// ✅ Only return children if user is logged in
	return user ? children : null;
};

export default ProtectedRoute;
