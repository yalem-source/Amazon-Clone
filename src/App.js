import React, { useContext, useEffect } from "react";
import Routering from "./Router/Routing";
import { DataContext } from "./Components/DataProvider/DataProvider";
import { Type } from "./Utility/Actiontype";
import { auth } from "./Utility/firebase";

function App() {
	const [{ user }, dispatch] = useContext(DataContext);

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				console.log(authUser);
				dispatch({
					type: Type.SET_USER,
					user: authUser,
				});
			} else {
				dispatch({
					type: Type.SET_USER,
					user: null,
				});
			}
		});
	}, []);

	return <Routering />;
}
export default App;
