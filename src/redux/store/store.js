// import { createStore } from "redux";
// const store = createStore(rootReducer);
// export default store;

import {
	legacy_createStore as createStore,
	applyMiddleware,
	compose,
} from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "../reducers";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
// const store = createStore(rootReducer);

export default store;
