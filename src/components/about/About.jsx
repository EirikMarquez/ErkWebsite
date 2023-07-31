import React from "react";
import "./about.css";
import ME from "../../assets/Eirik_AM_Picture-removebg-preview.png";
import { TbAward } from "react-icons/tb";
import { GiAirForce } from "react-icons/gi";
import { SiBookstack } from "react-icons/si";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <TbAward className="about__icon" />
              <h5>Experience</h5>
              <small>HEB Digital Security Intern</small>
            </article>
            <article className="about__card">
              <GiAirForce className="about__icon" />
              <h5>Achievements</h5>
              <small>3 Time AFA Cyber Patriot Platinum Team Captain</small>
            </article>
            <article className="about__card">
              <SiBookstack className="about__icon" />
              <h5>Education</h5>
              <small>3 Years of Coding Experience and Education </small>
            </article>
          </div>
          <p>
            I am a high schooler from San Antonio, Texas. I am an aspiring
            student hoping to eventually be a Software Engineer someday. I also
            have deep interests in Cyber Security and hope to work in both
            fields or to combine them by creating tools or through utilization
            of secure programming. Meow!
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
