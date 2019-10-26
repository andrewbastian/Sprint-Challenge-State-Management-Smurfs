import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk"
import logger from "redux-logger";
import { reducer } from "./reducers/index"

import App from "./components/App";

// create our store or "global state object"
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  // gives all children components access to the store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
