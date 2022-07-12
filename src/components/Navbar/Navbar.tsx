import React from "react";
import "./styles.scss";
import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="navbar__logo">
        <img src={logo} alt="logo" />
      </a>
      <ul className="navbar__links">
        <a href="#" className="navbar_link">
          Features
        </a>
        <a href="#" className="navbar_link">
          Partners
        </a>
        <a href="#" className="navbar_link">
          Stories
        </a>
      </ul>
      <button className="navbar__download-btn">Download for free</button>
    </nav>
  );
};
