import React, { Component } from "react";
import Carousel from "./Carousel";
import styles from "../styles/home.css";
import AnimateSection from "./AnimateSection";
import Bounce from "react-reveal/Bounce";

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
                I love reading
              </div>
            </Bounce>
          </div>

          <div className="words">
            <AnimateSection prefix="fade-in-section" stylename="is-visible">
              I am eager about learning new technologies and am excited by all
              the possibilities in cybersecurity.
            </AnimateSection>
          </div>
        </div>

        <div className="homeSection" id="Resume">
          <div style={{ width: "100vw" }}>
            <a href={require("../images/ResumeWebsite.pdf")} download>
              <button className="view-resume">View Resume</button>
            </a>
          </div>

          <div className="card">
            <h1>Design</h1>
            <p>
              I have just recently become interested in UI/UX and design. Since
              then, I have been designing websites in HTML/CSS and UI Frameworks
              in my free time.
            </p>
            <h3 style={{ width: "inherit" }}>Design Tools</h3>
            <ul>
              <li>PhotoShop</li>
              <li>Adobe Illustrator</li>
              <li>HTML/CSS</li>
              <li>Pen and Paper</li>
            </ul>
            <p>
              Though I am a beginner, I have always been an artist at heart.
            </p>
          </div>
          <div className="card">
            <h1>Skills</h1>
            <p>
              I love frontend development. My most recent experience involves
              writing applications in React, React Native and NodeJS.
            </p>
            <h3 style={{ width: "inherit" }}>Languages</h3>

            <p> C++, Javascript, Python</p>

            <h3 style={{ width: "inherit" }}>Tools/Technologies</h3>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>Git</li>
            </ul>
          </div>
          <div className="card">
            <h1>Other</h1>
            <p>
              I am an avid learner who loves working with like-minded people. I
              am dedicated and detail oriented and willing to work hard at any
              task that is given to me. I am a human rights activist. I love
              teaching others and offering mentorship to encourage others to
              work in the technology field.
            </p>
            <h3 style={{ width: "inherit" }}>Experiences</h3>
            <p>
              Board Member and Web developer of non profit organization
              Bangladesh Development Project
            </p>
            <p>
              Teachers assistant for a web development course of 30+ students
              and mentoring individuals.
            </p>
          </div>
        </div>

        <div className="footer" id="Contact">
          <a
            href="https://github.com/Marjan154"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <i class="fa fa-github"></i>
          </a>
          <a
            href="https://www.facebook.com/marjan.ansar"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <i class="fa fa-facebook-official"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/marjan-ansar-6481a0153/"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <i class="fa fa-linkedin"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
