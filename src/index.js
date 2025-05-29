
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { reducer, initialState } from "./Utility/reducer";
import { DataProvider } from "./Components/DataProvider/DataProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<>
		{/* <BrowserRouter> */}
		<DataProvider reducer={reducer} initialState={initialState}>
			<App />
		</DataProvider>
		{/* </BrowserRouter> */}
	</>
);

// 	<React.StrictMode>
// 		{/* <BrowserRouter> */}
// 		<DataProvider reducer={reducer} initialState={initialState}>
// 			<App />
// 		</DataProvider>
// 		{/* </BrowserRouter> */}
// 	</React.StrictMode>
// );