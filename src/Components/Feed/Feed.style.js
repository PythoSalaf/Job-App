import styled from "styled-components";

export const FeedContainer = styled.section`
  width: 95%;
  margin: 6rem auto 4rem;

  .feed-one {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .feed-one-left {
    flex: 1;
  }

  .feed-one-left-container {
    width: 250px;
    height: 250px;
    border: 1px solid var(--Primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ededed;
    border-radius: 15px;
  }

  .feed-one-left-container img {
    border-radius: 10px;
    width: 100%;
  }

  .feed-one-left img {
    width: 80%;
    height: 80%;
  }

  .feed-one-right {
    flex: 1;
    /* text-align: center; */
  }

  .feed-one-title {
    font-size: 28px;
    font-weight: 600;
    line-height: 40px;
    text-transform: capitalize;
    margin: 0 0 1.2rem;
  }

  .feed-one-text {
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    margin: 0 0 2.2rem;
  }

  .feed-one-btn {
    padding: 10px 20px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    background-color: var(--Primary-color);
    color: var(--White-color);
    border-radius: 10px;
    border: none;
    text-transform: capitalize;
  }

  .feed-two {
    margin: 8rem auto 0;
  }

  .feed-two-top {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .feed-two-title {
    font-size: 26px;
    font-weight: 600;
    line-height: 35px;
    text-transform: capitalize;
    margin: 0 0 1rem;
  }

  .feed-two-text {
    font-size: 18px;
    font-weight: 500;
    line-height: 25px;
  }

  .feed-two-bottom {
    width: 90%;
    margin: 0 auto;
  }

  @media screen and (max-width: 768px) {
    margin: 2rem auto 0;
    .feed-one {
      flex-direction: column;
      justify-content: center;
    }

    .feed-one-title {
      font-size: 24px;
      text-align: center;
      line-height: 32px;
      margin: 0 0 1rem;
    }

    .feed-one-text {
      font-size: 18px;
      text-align: center;
    }

    .feed-one-btn {
      padding: 10px 20px;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      background-color: var(--Primary-color);
      color: var(--White-color);
      border-radius: 10px;
      border: none;
      text-transform: capitalize;
    }

    .feed-one-right {
      width: 98%;
      margin: 2rem auto 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .feed-two-title {
      font-size: 22px;
      margin: 0 0 1rem;
    }

    .feed-two-text {
      font-size: 16px;
      line-height: 25px;
    }

    .feed-two-bottom {
      width: 98%;
      margin: 0 auto;
    }
  }

  @media screen and (max-width: 425px) {
    .feed-one-title {
      font-size: 22px;
    }

    .feed-one-text {
      font-size: 16px;
    }
  }
`;
