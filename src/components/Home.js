import React, { Component } from "react";
import Carousel from "./Carousel";
import styles from "../styles/home.css";
import AnimateSection from "./AnimateSection";

import About from "./About";

class Home extends Component {
  state = {};

  isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }
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
        <div className="homeSection color">
          <div>
            <AnimateSection stylename="fall1" prefix="word fall-text">
              I love art
            </AnimateSection>
            <AnimateSection stylename="fall2" prefix="word fall-text">
              I love meeting new people
            </AnimateSection>
            <AnimateSection stylename="fall3" prefix="word fall-text">
              I love travelling
            </AnimateSection>
          </div>
          <div className="words">
            I am passionate about learning new technologies and am excited by
            all the possibilities in cybersecurity.
          </div>
        </div>

        <div className="homeSection"></div>
      </div>
    );
  }
}

export default Home;
