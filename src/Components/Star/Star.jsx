import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { StartContainer } from "./Star.style";

const Star = () => {
  return (
    <StartContainer>
      <BsStarFill size={17} color="orange" />
      <BsStarFill size={17} color="orange" />
      <BsStarFill size={17} color="orange" />
      <BsStarFill size={17} color="orange" />
      <BsStarHalf size={17} color="orange" />
    </StartContainer>
  );
};

export default Star;
