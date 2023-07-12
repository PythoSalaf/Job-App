import React from "react";
import { error } from "../../Assets";
import { useNavigate } from "react-router-dom";
import { ErrorContainer } from "./Error.style";

const ErrorPage = () => {
  const navigate = useNavigate()
  return (
    <ErrorContainer>
      <div className="error-container">
        <div className="error-content">
          <img src={error} alt="erro" className="error-img" />
          <div className="error-content-text">
            <h3 className="error-text">oops! page not found</h3>
            <div className="error-field">
              <input type="text" placeholder="search..." />
              <button className="error-field-btn" >search</button>
            </div>
          </div>
          <div className="error-to-home" >
            <button className="error-to-home-btn" onClick={() => navigate('/')} >Back To Home</button>
          </div>
        </div>
      </div>
    </ErrorContainer>
  );
};

export default ErrorPage;
