import React from "react";
import "./footer.css";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Eirik Marquez
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/EirikMarquez" target="_blank">
          <FiTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/eirik-marquez-643a2a187"
          target="_blank"
        >
          <FiLinkedin />
        </a>
        <a href="https://github.com/" target="_blank">
          <FiGithub />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Erk, All Rights Reserved</small>
        <small>. Thanks again to EGATOR tutorials</small>
      </div>
    </footer>
  );
};

export default Footer;
