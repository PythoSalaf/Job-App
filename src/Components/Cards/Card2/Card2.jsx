import React from "react";
import { CardTwo } from "./Card2.style";
import { ImLocation2 } from "react-icons/im";
import { AiFillHeart } from "react-icons/ai";

const Card2 = ( {avatar, job, company, salary, location, } ) => {
  return (
    <CardTwo>
      <div className="cardtwo-avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="cardtwo-content">
        <h2 className="card-job-title">{job}</h2>
        <h4 className="job-company">{company}</h4>

        <div className="cardtwo-data-container">
          <div className="data-amount">
            <ImLocation2 size={33} color="#fff" />
            <p>${salary?.toLocaleString()} /Month</p>
          </div>
          <div className="data-location">
            <ImLocation2 size={33} color="#fff" />
            <p>{location}</p>
          </div>
        </div>
        <div className="card2-btn-container">
          <div className="heart">
            <AiFillHeart size={30} color="#408bdc" />
          </div>
          <button className="card2-apply-btn">Apply Now</button>
        </div>
      </div>
    </CardTwo>
  );
};

export default Card2;
