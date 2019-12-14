import React, { Component } from "react";
import Carousel from "./Carousel";
import styles from "../styles/home.css";

import About from "./About";

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
          <About />
        </div>
        <div className="homeSection bg">
          <span className="homeSection bg-text">
            I ABSOLUTELY LOVE ALL THINGS TECHNOLOGY
          </span>
        </div>
        <div></div>
        <div className="homeSection color">{/* <Carousel /> */}</div>

        <div className="homeSection"></div>
      </div>
    );
  }
}

export default Home;
