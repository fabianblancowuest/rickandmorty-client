// import React from 'react'
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import axios from "axios";
const root = createRoot(document.getElementById("root"));

axios.defaults.baseURL = "localhost://3001";
// axios.defaults.baseURL =
// 	"https://rickandmorty-server-production-c9cc.up.railway.app/";

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
);

// ReactDOM.render(
// 	<Provider store={store}>
// 		<BrowserRouter>
// 			<App />
// 		</BrowserRouter>
// 	</Provider>,
// 	document.getElementById("root"),
// );
