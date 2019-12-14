import React, { Component } from "react";
import Carousel from "./Carousel";
import styles from "../styles/home.css";
import AnimateSection from "./AnimateSection";
import Bounce from "react-reveal/Bounce";
import Reveal from "react-reveal/Reveal";

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
        <div className="homeSection color">
          <div className="wordColorSize" style={{ float: "left" }}>
            <div className="rotateRight">
              <Bounce top delay={1200}>
                <div
                  style={{
                    backgroundColor: "white",
                    color: "#14b8af"
                  }}
                >
                  I love art
                </div>
              </Bounce>
            </div>
            <div className="rotateLeft">
              <Bounce top delay={900}>
                <div style={{ margin: "20px" }}>I love travelling</div>
              </Bounce>
            </div>
            <Bounce top delay={600}>
              <div style={{ backgroundColor: "white", color: "#14b8af" }}>
                I love animals
              </div>
            </Bounce>

            <div className="rotateLeft">
              <Bounce top delay={300}>
                <div style={{ margin: "20px" }}>I love meeting new people</div>
              </Bounce>
            </div>
            <Bounce top>
              <div style={{ backgroundColor: "white", color: "#14b8af" }}>
                I love meeting reading
              </div>
            </Bounce>
          </div>

          <div className="words">
            <AnimateSection prefix="fade-in-section" stylename="is-visible">
              I am passionate about learning new technologies and am excited by
              all the possibilities in cybersecurity.
            </AnimateSection>
          </div>
        </div>

        <div className="homeSection"></div>
      </div>
    );
  }
}

export default Home;
