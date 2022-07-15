import React from "react";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { DiGithub } from "react-icons/di";
import { TiSocialTwitterCircular } from "react-icons/ti";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/eirik-marquez-643a2a187"
        target="_blank"
      >
        <TiSocialLinkedinCircular size="4em" />
      </a>
      <a href="https://github.com/EirikMarquez" target="_blank">
        <DiGithub size="4em" />
      </a>
      <a href="https://twitter.com/EirikMarquez" target="_blank">
        <TiSocialTwitterCircular size="4em" />
      </a>
    </div>
  );
};

export default HeaderSocials;
