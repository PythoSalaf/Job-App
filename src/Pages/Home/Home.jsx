import React from "react";
import { HomeContainer } from "./Home.style";
import { Hero, Offer, Steps } from "../../Components";

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <Steps />
      <Offer />
    </HomeContainer>
  );
};

export default Home;
