import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux"
import store from "./store"
import { ToastContainer } from "react-toastify"
import "./styles/index.scss"
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <App />
      <ToastContainer autoClose={1000} />
    </Router>
  </Provider>
);
