// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import { initialState, reducer } from './Utility/reducer';
// import { Dataprovider } from './Components/DataProvider/Dataprovider';

// ReactDOM.createRoot(document.getElementById('root')) root.render(
//   // <BrowserRouter>
//   <React.StrictMode>
// <Dataprovider reducer={reducer} initialState={initialState}>
//     <App />
//   {/* // </BrowserRouter> */}
// </Dataprovider>
// </React.StrictMode>
// );
/* 











// import React from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App.js";
// import { DataProvider } from "./Components/DataProvider/Dataprovider";
// import { initialState, reducer } from "./Utility/reducer.js";

// const root = createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <DataProvider reducer={reducer} initialState={initialState}>
//       <App />
//     </DataProvider>
//   </React.StrictMode>
// ); */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import { BrowserRouter } from 'react-router-dom';
import { reducer, initialState } from "./Utility/reducer";
import { DataProvider } from "./Components/DataProvider/DataProvider";
// import { DataProvider } from "./Components/DataProvider/Dataprovider";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		{/* <BrowserRouter> */}
		<DataProvider reducer={reducer} initialState={initialState}>
			<App />
		</DataProvider>
		{/* </BrowserRouter> */}
	</React.StrictMode>
);
