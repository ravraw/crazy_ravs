import React from "react";
import ReactDOM from "react-dom";
//Router setup
import { BrowserRouter } from "react-router-dom";
//redux setup
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import {
  signinReducer,
  signupReducer,
  googleAuthReducer,
  menuLoadReducer
} from "./Store/Reducers";

// Internal
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// Axios
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3005/";

const initialState = {};

//MIDDLEWARES
const middleware = [thunk];

// REDUCERS  from Reducers folder / index.js
const rootReducer = combineReducers({
  signin: signinReducer,
  signup: signupReducer,
  googleAuth: googleAuthReducer,
  loadMenu: menuLoadReducer
});

// ADDS REDUX DEV TOOL
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// STORE
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
