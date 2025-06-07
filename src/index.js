import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { reducer, initialState } from "./Utility/reducer";
import { DataProvider } from "./Components/DataProvider/DataProvider";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	// <React.StrictMode>
	// 	<HashRouter basename="/">
	<DataProvider reducer={reducer} initialState={initialState}>
		<App />
	</DataProvider>
	// 	</HashRouter>
	// </React.StrictMode>
);
