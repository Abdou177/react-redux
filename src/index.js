import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "./Js/Store/store";

import App from "./App";

import "antd/dist/antd.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
