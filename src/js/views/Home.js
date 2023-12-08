import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReelReviews from '../../img/ReelReviews.png'
import MyTube from '../../img/MyTube.png'
import RectangleCard from "../components/RectangleCard";

const Home = () => {
  return (
    // Main Content
    <div className="wrap-page">
      <Navbar />
      <div className="feed">
        <ul>
          <li className="project">
            <img src={ReelReviews} />
            <div className="project-info">
              <RectangleCard type="project" text="ReelReviews" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium ligula sed ornare aliquet. Sed nec mattis nisi. Pellentesque placerat magna nulla, id fermentum justo eleifend non. Donec ultrices sed erat sit amet condimentum. Pellentesque tellus enim, laoreet pretium molestie accumsan, viverra eu lorem. Nam viverra arcu eget risus consequat, vitae congue purus malesuada. Sed in vestibulum magna. Nam sit amet justo dapibus, euismod orci vel, vehicula magna. Suspendisse potenti. Curabitur at tellus sed orci accumsan porta vitae ac metus. Curabitur non odio efficitur, suscipit ex eu, pharetra ante.</p>
            </div>
          </li>
          <li className="project">
            <img src={MyTube} />
            <div className="project-info">
              <RectangleCard type="project" text="Mytube" />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pretium ligula sed ornare aliquet. Sed nec mattis nisi. Pellentesque placerat magna nulla, id fermentum justo eleifend non. Donec ultrices sed erat sit amet condimentum. Pellentesque tellus enim, laoreet pretium molestie accumsan, viverra eu lorem. Nam viverra arcu eget risus consequat, vitae congue purus malesuada. Sed in vestibulum magna. Nam sit amet justo dapibus, euismod orci vel, vehicula magna. Suspendisse potenti. Curabitur at tellus sed orci accumsan porta vitae ac metus. Curabitur non odio efficitur, suscipit ex eu, pharetra ante.</p>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
