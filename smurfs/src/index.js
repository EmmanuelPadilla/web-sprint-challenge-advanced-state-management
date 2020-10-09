import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { featureReducer } from "./reducers/reducer";

const store = createStore(smurfReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
