import React from "react";
import { HomeContainer } from "./Home.style";
import { Advert, Feed, Hero, JobAlert, Offer, Steps } from "../../Components";

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <Steps />
      <JobAlert />
      <Offer />
      <Feed />
      <Advert />
    </HomeContainer>
  );
};

export default Home;
