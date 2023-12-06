import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    // Main Content
    <div className="wrap-page">
      <Navbar />
      <div className="feed">
        Body
      </div>
      <Footer />
    </div>
  );
};

export default Home;
