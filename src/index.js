import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/styles/index.css"
import "../src/styles/timeline.css"
import "../src/styles/feed.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
