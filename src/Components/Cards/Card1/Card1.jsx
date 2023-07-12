import React from "react";
import { Card } from "./Card1.style";

const Card1 = ( { icon, title, content } ) => {

  return (
    <Card>
      <div className="card1-container">
        <div className="card1-content">
          <div className="card1-icon-container">
            <div className="card1-icon" >{icon}</div>
          </div>
          <h3 className="card1-title">{title}</h3>
          <p className="card1-content">{content}</p>
        </div>
      </div>
    </Card>
  );
};

export default Card1;
