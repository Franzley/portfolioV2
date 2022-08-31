import React from "react";
import "../../styles/header.css";
import profile from "../../img/profile.jpg";

const Header = () => {
  return (
    <>
      {/* Transparent Navbar */}
      <nav className="navbar navbar-dark ps-5 pe-5">
        <div className="container-fluid">
          <a className="navbar-brand" href="google.com">
            Home
          </a>
          <ul className="navbar-nav d-flex flex-row">
            <li className="nav-item">
              <a
                className="nav-link me-4"
                href="https://www.linkedin.com/in/franzley-bonhomme-8a1b77247/"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/Franzley">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Header Body */}
      <div id="home" className="header">
        <h1>Hi, I'm Franzley Bonhomme</h1>
        <p>
          I am a web developer based in Miami, FL. I am always eager to learn
          and improve upon my skill set.
        </p>
        {/* Profile Picture when page is small */}
        <img
          id="profile-pic"
          className="is-mobile"
          src={profile}
          alt="Profile"
        />
        {/* SVG curved bottom */}
        <svg
          id="wave"
          className="svg-wave"
          viewBox="0 0 1440 80"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(243, 106, 62, 1)" offset="0%"></stop>
              <stop stopColor="rgba(255, 179, 11, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            className="svg-path"
            fill="#FDF4E6"
            d="M0,60L48,50C96,40,192,20,288,16.7C384,13,480,27,576,35C672,43,768,47,864,41.7C960,37,1056,23,1152,16.7C1248,10,1344,10,1440,18.3C1536,27,1632,43,1728,56.7C1824,70,1920,80,2016,70C2112,60,2208,30,2304,16.7C2400,3,2496,7,2592,10C2688,13,2784,17,2880,23.3C2976,30,3072,40,3168,46.7C3264,53,3360,57,3456,50C3552,43,3648,27,3744,25C3840,23,3936,37,4032,50C4128,63,4224,77,4320,81.7C4416,87,4512,83,4608,78.3C4704,73,4800,67,4896,63.3C4992,60,5088,60,5184,65C5280,70,5376,80,5472,80C5568,80,5664,70,5760,56.7C5856,43,5952,27,6048,26.7C6144,27,6240,43,6336,43.3C6432,43,6528,27,6624,16.7C6720,7,6816,3,6864,1.7L6912,0L6912,100L6864,100C6816,100,6720,100,6624,100C6528,100,6432,100,6336,100C6240,100,6144,100,6048,100C5952,100,5856,100,5760,100C5664,100,5568,100,5472,100C5376,100,5280,100,5184,100C5088,100,4992,100,4896,100C4800,100,4704,100,4608,100C4512,100,4416,100,4320,100C4224,100,4128,100,4032,100C3936,100,3840,100,3744,100C3648,100,3552,100,3456,100C3360,100,3264,100,3168,100C3072,100,2976,100,2880,100C2784,100,2688,100,2592,100C2496,100,2400,100,2304,100C2208,100,2112,100,2016,100C1920,100,1824,100,1728,100C1632,100,1536,100,1440,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Header;
