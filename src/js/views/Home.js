import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionCard from "../components/SectionCard";
// import "../../styles/index.css";

const Home = () => {
  return (
    // Main Content
    <div className="wrap-page">
      <Navbar/>
      <SectionCard/>
      <div className="feed">
        Body
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
