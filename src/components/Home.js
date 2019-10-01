import React, { Component } from "react";
import styles from "../styles/home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div className="intro">
          <h1>Hi, My name is Marjan...</h1>
        </div>
        <div className="homeSection color"></div>
        <div className="homeSection"></div>
      </div>
    );
  }
}

export default Home;
