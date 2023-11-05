import React from "react";
import { StepContainer } from "./Steps.style";
import { Card1 } from "../../Components";
import { AlwaysData, StepData } from "../DummyData";
import { help } from "../../Assets";

const Steps = () => {
  return (
    <StepContainer>
      <div className="step-top">
        <h4>How it works?</h4>
        <h2>Follow 4 Easy Steps</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>

      <div className="step-middle">
        <div className="step-data">
          {StepData.map((item) => (
            <div key={item.id}>
              <Card1 {...item} />
            </div>
          ))}
        </div>
      </div>

      <div className="step-bottom">
        <div className="step-bottom-left">
          <img src={help} alt="step-icon" />
        </div>
        <div className="step-bottom-right">
          <h3 className="step-bottom-tittle">We always help you with !</h3>
          <div className="step-bottom-container">
            {AlwaysData.map((data) => (
              <div className="always-data-container" key={data.id}>
                <div className="always-avatar">{data.avatar}</div>
                <div className="always-content">
                  <h3>{data.content}</h3>
                  <p>{data.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StepContainer>
  );
};

export default Steps;
