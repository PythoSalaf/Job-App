import React from "react";
import { FeedContainer } from "./Feed.style";
import { feed } from "../../Assets";

const Feed = () => {
  return (
    <FeedContainer>
      <section className="feed-one">
        <div className="feed-one-left">
          <div className="feed-one-left-container">
            <img src={feed} alt="feed-icon" />
          </div>
        </div>
        <div className="feed-one-right">
          <h2 className="feed-one-title">
            Over 10,000+ people registered <br /> in our website
          </h2>
          <p className="feed-one-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br /> Error, sunt?
          </p>
          <button className="feed-one-btn">explore more</button>
        </div>
      </section>

      <section className="feed-two">
        <div className="feed-two-top">
          <h2 className="feed-two-title">What a job holder says about us</h2>
          <p className="feed-two-text">
          Lorem ipsum dolor sit amet consectetur adipisicing <br/> elit. Ut modi corrupti illo.
          </p>
        </div>
      </section>
    </FeedContainer>
  );
};

export default Feed;
