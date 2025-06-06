import React, { useContext, useState } from "react";
import classes from "./SignUp.module.css";
import LayOut from "../../LayOut/LayOut";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
// import { Auth} from "./Auth/"
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../Utility/firebase";
import { firebase } from "firebase/compat/app";
import { DataContext } from "../../DataProvider/DataProvider";
import { Type } from "../../../Utility/Actiontype";

function Auth() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [laoding, setLaoding] = useState({
		signIn: false,
		signUp: false,
	});

	const [{ user }, dispatch] = useContext(DataContext);

	const navigate = useNavigate();
	const navStateData = useLocation();
	console.log(navStateData);
	console.log(user);

	const authHandler = async (e) => {
		e.preventDefault();
		console.log(e.target.name);
		if (e.target.name == "signin") {
			//firbase auth
			setLaoding({ ...laoding, signIn: true });
			signInWithEmailAndPassword(auth, email, password)
				.then((userInfos) => {
					dispatch({
						type: Type.SET_USER,
						user: userInfos.user,
					});
					setLaoding({ ...laoding, signIn: false });
					navigate(navStateData?.state?.redirect || "/");
				})
				.catch((err) => {
					setError(err.message);
					setLaoding({ ...laoding, signIn: false });
				});
		} else {
			setLaoding({ ...laoding, signUp: true });
			createUserWithEmailAndPassword(auth, email, password)
				.then((userInfos) => {
					dispatch({
						type: Type.SET_USER,
						user: userInfos.user,
					});
					setLaoding({ ...laoding, signUp: false });
					navigate(navStateData?.state.redirect || "/");
				})
				.catch((err) => {
					setError(err.message);
					setLaoding({ ...laoding, signUp: false });
				});
		}
	};

	return (
		<section className={classes.Login}>
			{/* logo */}
			<Link>
				<img
					src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
					alt=""
				/>
			</Link>

			{/* form */}

			<div className={classes.Login__container}>
				<h1> Sign In</h1>
				{navStateData?.state?.msg && (
					<small
						style={{
							padding: "5px",
							textAlign: "center",
							color: "red",
							fontWeight: "bold",
						}}
					></small>
				)}

				<form action="">
					<div>
						<label htmlFor="email"> Email </label>
						<input
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							type="email"
							id="email"
						/>
					</div>

					<div>
						<label htmlFor="password">password </label>
						<input
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							type="password"
							id="password"
						/>
					</div>
					<button
						type="submit"
						onClick={authHandler}
						name="signin"
						className={classes.Login__signInButton}
					>
						{laoding.signIn ? (
							<ClipLoader color="#000" size={15}>
								{" "}
							</ClipLoader>
						) : (
							"Sign In"
						)}
					</button>
				</form>

				<p>
					By Signing in you agree to the AMAZON FAKE CLONE condition of uses &
					Sale.Please see our Privacy Notice , our Cookies Notice and our
					Interest Based Ads Notice
				</p>
				{/* create account btn */}

				<button
					type="submit"
					onClick={authHandler}
					name="Signup"
					className={classes.Login__registerButton}
				>
					{laoding.signUp ? (
						<ClipLoader color="#000" size={15}>
							{" "}
						</ClipLoader>
					) : (
						"Create your Amazon account"
					)}
				</button>
				{error && (
					<small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
				)}
			</div>
		</section>
	);
}

export default Auth;
