import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import mainReducer from "./store/mainReducer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import thunk from "redux-thunk";

import App from "./App";

const store = createStore(mainReducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  rootElement
);
