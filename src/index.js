import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./Store/store";
import { Provider } from "react-redux";
import { ScrollToTop } from "./Features/ScrollToTop";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop/>
        <App />  
      </Router>
    </Provider>
  </React.StrictMode> 
);
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});