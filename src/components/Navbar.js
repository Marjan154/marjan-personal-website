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
          <Link to="/About/">About</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/Portfolio/">Portfolio</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/Account/">Contact</Link>{" "}
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
