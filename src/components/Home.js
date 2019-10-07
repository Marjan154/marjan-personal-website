import React, { Component } from "react";
import Carousel from "./Carousel";
import styles from "../styles/home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="landing">
          <div className="intro">
            <h1>Hi, My name is Marjan...</h1>
          </div>
        </div>
        <div className="homeSection color">
          <div className="words slide left">Some amazing content here.</div>
          <div className="words slide right">
            Some very interesting information
          </div>
        </div>
        <div className="homeSection bg">
          <span className="homeSection bg-text">
            I SHOULD PROBABLY USE SVG FOR THIS IN THE FUTURE.
          </span>
        </div>
        <div className="homeSection color">{/* <Carousel /> */}</div>

        <div className="homeSection"></div>
      </div>
    );
  }
}

export default Home;
