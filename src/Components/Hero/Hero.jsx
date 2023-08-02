import React from "react";
import { BiSearch } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { HeroContainer } from "./Hero.style";
import { hero } from "../../Assets";

const Hero = () => {
  return (
    <HeroContainer>
      <div className="hero">
        <div className="hero-left">
          <h2 className="hero-title">
            {" "}
            Gain access to a wide range of <span>
              job opportunities
            </span> from <span>top companies </span>
            Across various industries
          </h2>
          <p className="hero-text">
            Showcase your skills and expertise with a dynamic profile that
            captures the attention of hiring managers
          </p>
          <div className="hero-content">
            <div className="hero-field-icon">
              <BiSearch className="hero-icon" />
              <input
                type="text"
                placeholder="job title..."
                className="hero-input"
              />
            </div>
            <div className="hero-field-icon">
              <ImLocation2 className="hero-icon" />
              <input
                type="text"
                placeholder="location"
                className="hero-input"
              />
            </div>
            <button className="hero-btn">search</button>
          </div>
        </div>
        <div className="hero-right">
          <img src={hero} alt="" />
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;
