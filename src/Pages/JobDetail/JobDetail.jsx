import React from "react";
import { Deatail } from "./JobDetail.style";
import { detail } from "../../Assets";
const JobDetail = () => {
  return (
    <Deatail>
      <div className="detail-hero">
        <img src={detail} alt="detail-hero" />
        <div className="job-detail-icon">
          <img src="" alt="detail-icon" />
        </div>
      </div>
      <div className="app-detail-container">
        <div className="app-detail-left">
          <h1>heloo</h1>
        </div>
        <div className="app-detail-right"></div>
      </div>
    </Deatail>
  );
};

export default JobDetail;
