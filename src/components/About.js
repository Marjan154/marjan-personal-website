import React, { Component } from "react";
import styles from "../styles/home.css";

class About extends Component {
  state = {};
  render() {
    return (
      <div id="About">
        <div className="homeSection">
          <div className="words slide right">
            I am currently a senior studying computer science at Hunter College
            and an aspiring front end developer.
          </div>
          <div className="headshot">
            <img src={require("../images/headshot.jpg")}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
