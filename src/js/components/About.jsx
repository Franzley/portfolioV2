import React from "react";
import "../../styles/about.css";

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="sub-heading">
        <h1>About Me</h1>
        <hr></hr>
      </div>

      <div className="about-content">
        <ul>
          <li>
            Attended Florida International University from August 2015 -
            December 2019. Obtained a Bachelor's of Science in Computer
            Engineering
          </li>
          <li>
            Attended Full-Stack Web Development Bootcamp at MDC with 4Geeks
            Academy from May 2022 - August 2022
          </li>
          <li>
            I now have the technical knowledge create websites from the the ground-up,
            write reusable code and debug websites.
          </li>
          <li>
            Became a Teaching Assistant for the next Cohort in 4Geeks Academy in
            August 2022
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
