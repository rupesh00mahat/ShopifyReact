import React from "react";
import "../css/navbar-and-home.css";
import ImageOne from "../assets/home-image-1.jpg";
import ImageTwo from "../assets/home-image-2.jpg";
import ImageThree from "../assets/home-image-3.jpg";

function Home() {
  return (
    <div id="home">
      <div className="home-content">
        <h2>
          Experience the height of fashion with our exquisite designer pieces.
        </h2>
        <p>
          Where style, sophistication, exclusivity is the forefront of our
          collection. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Repellat quaerat nostrum quia nam earum, libero, expedita impedit
          delectus provident quo eveniet.
        </p>
        <button className="explore-clothing-btn">
          <a href="/">Discover Our Products</a>
        </button>
      </div>
      <div className="home-image">
        <div className="row">
          <span className="home-image-wrapper">
            <img className="home-image-1" src={ImageOne} loading="lazy" />
          </span>
          <span className="home-image-wrapper">
            <img className="home-image-3" src={ImageThree} loading="lazy" />
          </span>
        </div>
        <span className="home-image-wrapper home-image-wrapper-large">
          <img className="home-image-2" src={ImageTwo} loading="lazy" />
        </span>
      </div>
    </div>
  );
}

export default Home;
