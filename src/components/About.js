import React, { Component } from "react";
import styles from "../styles/home.css";
import AnimateSection from "./AnimateSection";

class About extends Component {
  state = {};
  render() {
    return (
      <div id="About">
        <div className="homeSection">
          <div className="words">
            <AnimateSection prefix="fade-in-section" stylename="is-visible">
              I am currently a senior studying computer science at Hunter
              College and an aspiring front end developer.
            </AnimateSection>
          </div>
          <div className="headshot">
            <AnimateSection prefix="fade-in-section" stylename="is-visible">
              <img src={require("../images/headshot.jpg")}></img>
            </AnimateSection>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
