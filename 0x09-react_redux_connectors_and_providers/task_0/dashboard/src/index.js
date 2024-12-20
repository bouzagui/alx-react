import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { uiReducer } from '.reducers/uiReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(uiReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
