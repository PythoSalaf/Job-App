import React from "react";
import { AboutContainer } from "./About.style";
import { FeatureAbout, Swipper } from "../../Components";

const About = () => {
  return (
    <AboutContainer>
      <div className="about-hero">
        <h1 className="about-hero-title">About us</h1>
      </div>
      <FeatureAbout />
      <div className="about-slider">
        <Swipper />
      </div>
    </AboutContainer>
  );
};

export default About;
