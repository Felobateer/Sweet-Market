import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ShoppingProvider } from "./proxyBackend/shopping.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ShoppingProvider>
        <App />
      </ShoppingProvider>
    </HashRouter>
  </React.StrictMode>
);
