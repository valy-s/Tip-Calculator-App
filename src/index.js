import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TipDataProvider } from "./context/context";

ReactDOM.render(
  <TipDataProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TipDataProvider>,
  document.getElementById("root")
);
