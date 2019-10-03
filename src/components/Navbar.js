import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/about/">About</Link>{" "}
        </li>
        <li>
          <a
            href="https://fmundergrad.hunter.cuny.edu/~ansarm/medp285/"
            target="_blank"
          >
            Classwork
          </a>{" "}
          {/* <Link to="/Portfolio/">Portfolio</Link>{" "} */}
        </li>
        <li>
          {" "}
          <Link to="/contact/">Contact</Link>{" "}
        </li>
        <li>
          <a href="https://ansarmarjan154.wixsite.com/website" target="_blank">
            Blog
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
