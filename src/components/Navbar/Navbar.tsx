import React from "react";
import "./styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <ul className="navbar__links">
        <li>
          <a href="/" className="navbar__link">
            Features
          </a>
        </li>
        <li>
          <a href="/" className="navbar__link">
            Partners
          </a>
        </li>
        <li>
          <a href="/" className="navbar__link">
            Stories
          </a>
        </li>
      </ul>
      <button type="button" className="navbar__download-btn">
        Download for free
      </button>
    </nav>
  );
};
