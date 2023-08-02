import React from "react";
import { FeaturedContainer } from "./FeatureAbout.style";
import { about } from "../../Assets";

const FeatureAbout = () => {
  const HowData = [
    {
      id: 1,
      title: "1. Search a job",
      content:
        "Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.",
    },
    {
      id: 2,
      title: "2. Apply for job",
      content:
        "Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.",
    },
    {
      id: 3,
      title: "3. Get your job",
      content:
        "Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod tempor incididunt ut laborea.",
    },
  ];
  return (
    <FeaturedContainer>
      <section className="feature-about-top">
        <div className="feature-about-top-left">
          <h2 className="about-top-title">
            28k Talented people are getting Jobs
          </h2>
          <h4 className="about-top-subtitle">
            Mollit anim laborum duis au dolor in voluptate velit ess cillum
            dolore eu lore dsu quality mollit anim laborumuis au dolor in
            voluptate velit cillum.
          </h4>
          <p className="about-top-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae illo
            quaerat, minus impedit vitae maxime provident sed doloremque nisi
            explicabo? Accusamus iste consectetur nulla nemo, alias laboriosam
            magni tempora assumenda.
          </p>
          <button className="about-top-btn">post a job</button>
        </div>
        <div className="feature-about-top-right">
          <img src={about} alt="" className="about-top-icon" />
        </div>
      </section>
      <section className="feature-about-bottom">
        <h3 className="about-bottom-subtitle">Apply process</h3>
        <h2 className="about-bottom-title">How it works</h2>

        <div className="about-bottom-container">
          {HowData.map((data) => (
            <div key={data.id} className="data-container">
              <div className="data-icon"></div>
              <h2 className="data-title">{data.title}</h2>
              <p className="data-content">{data.content}</p>
            </div>
          ))}
        </div>
      </section>
    </FeaturedContainer>
  );
};

export default FeatureAbout;
