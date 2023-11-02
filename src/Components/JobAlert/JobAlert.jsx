import React from "react";
import { useNavigate } from "react-router-dom";
import { JobAlertContainer } from "./JobAlert.style";
import { JobAlertData } from "../DummyData";

const JobAlert = () => {
  const navigate = useNavigate();
  return (
    <JobAlertContainer>
      <div className="alert-top-content">
        <h2 className="alert-top-title">Jobs Alert</h2>
        <p className="alert-top-text">
          Hand-picked jobs featured depending on popularity and benifits
        </p>
      </div>

      <div className="alert-top-main">
        {JobAlertData.map((item) => (
          <div className="alert-top-container" key={item.id}>
            <div className="item-icon">
              <img src={item.icon} alt={`icon-${item.id}`} />
            </div>
            <div className="item-content">
              <h3 className="alert-content-title">{item.title}</h3>
              <h5 className="alert-content-conpany">company: {item.company}</h5>
              <button className={`${item.class}-btn`}>{item.type}</button>
            </div>
          </div>
        ))}
      </div>

      <div className="job-alert-btn-container">
        <button className="alert-btns" onClick={() => navigate("find-a-job")}>
          browse all jobs
        </button>
      </div>
    </JobAlertContainer>
  );
};

export default JobAlert;
