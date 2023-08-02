import React from "react";
import { Testimonial } from "./TestimonialCard.style";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Star } from "../../Components";
import { avater } from "../../Assets";

const TestimonialCard = ({ name, company, review }) => {
  return (
    <Testimonial>
      <div className="test-card-top">
        <img src={avater} alt="test-aater" />
      </div>
      <div className="test-card-bottom">
        <div className="test-card-content">
          <div className="test-card-content-top">
            <h3 className="content-name">{name}</h3>
            <h4 className="content-company">{company}</h4>
            <Star />
          </div>
          <FaQuoteLeft className="qoute-left" size={25} />
          <p className="content--text">{review}</p>
          <FaQuoteRight className="qoute-right" size={25} />
        </div>
      </div>
    </Testimonial>
  );
};

export default TestimonialCard;
