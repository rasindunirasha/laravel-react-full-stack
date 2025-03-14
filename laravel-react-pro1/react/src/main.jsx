import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";  // ✅ Import Router
import { ContextProvider } from "./contexts/ContextProvider";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
    <Router />
    </ContextProvider>
  </React.StrictMode>
);
