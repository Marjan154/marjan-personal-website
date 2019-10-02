import React, { Component } from "react";
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
          {/* <div className="container"> */}
          <div className="words slide left">Some amazing content here.</div>
          <div className="words slide right">
            Some very interesting information
          </div>
          {/* </div> */}
        </div>
        <div className="homeSection"></div>
        <div className="homeSection bg"></div>
        <div className="homeSection"></div>
      </div>
    );
  }
}

export default Home;
