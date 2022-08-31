import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./js/views/Home";
import Header from "./js/components/Header.jsx";
import Footer from "./js/components/Footer.jsx";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>
);
