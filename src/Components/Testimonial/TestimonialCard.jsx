import React from "react";
import { Testimonial } from "./TestimonialCard.style";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const TestimonialCard = () => {
  return (
    <Testimonial>
      <div className="test-card-top"></div>
      <div className="test-card-bottom">
        <div className="test-card-content">
          <div className="test-card-content-top">
            <h3 className="">Name Here</h3>
            <h4 className="">Company Here</h4>
            <div className="star-here">star here</div>
          </div>
          <p>
            <FaQuoteLeft />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa natus
            eveniet reiciendis vero repudiandae accusantium nesci?
            <FaQuoteRight />
          </p>
        </div>
      </div>
    </Testimonial>
  );
};

export default TestimonialCard;
