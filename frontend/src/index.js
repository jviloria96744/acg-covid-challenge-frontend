import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GraphState from "./context/graph/GraphState";
import "./index.css";

ReactDOM.render(
  <GraphState>
    <App />
  </GraphState>,
  document.getElementById("root")
);
