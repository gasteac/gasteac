import React from "react";
import ReactDOM from "react-dom/client";
import { GasteacRouter } from "./router/GasteacRouter.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GasteacRouter />
    </BrowserRouter>
  </React.StrictMode>
);
