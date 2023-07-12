import React from "react";
import { OfferContainer } from "./Offer.style";
import { Card2 } from "../../Components";
import { OfferData } from "../DummyData";

const Offer = () => {
  return (
    <OfferContainer>
      <section className="offer-top">
        <div className="offer-top-left">
          <h2 className="top-left-title">
            500<span>+</span> companies posted there jobs here
          </h2>
          <p className="top-left-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
          <p className="top-left-text">
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <button className="top-left-btn">Paste job</button>
        </div>
        <div className="offer-top-right">
          <div className="top-right-ball"></div>
        </div>
      </section>

      <section className="offer-bottom">
        <div className="offer-bottom-top">
          <h2 className="bottom-top-title">
            Grab this exciting offers and <br /> apply now{" "}
          </h2>
          <div className="bottom-top-btn">
            <button className="part-time-btn">part time</button>
            <button className="full-time-btn">full time</button>
          </div>
        </div>
        <div className="offer-bottom-bottom">
          <div className="offer-data">
          {OfferData.map((data) => (
            <div key={data.id}  >
              <Card2 {...data} />
            </div>
          ))}

          </div>
        </div>
      </section>
    </OfferContainer>
  );
};

export default Offer;
