import React from "react";
import { HomeContainer } from "./Home.style";
import { Advert, Feed, Hero, Offer, Steps } from "../../Components";

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <Steps />
      <Offer />
      <Feed />
      <Advert />
    </HomeContainer>
  );
};

export default Home;
