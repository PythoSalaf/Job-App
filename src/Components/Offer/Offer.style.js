import styled from "styled-components";

export const OfferContainer = styled.section`
  width: 95%;
  margin: 10rem auto 2rem;

  .offer-top {
    width: 100%;
    margin: 6rem auto 2rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .offer-top-left {
    flex: 1.5;
  }

  .top-left-title {
    font-size: 28px;
    font-weight: 600;
    line-height: 35px;
    margin: 0 0 0.9rem;
    text-transform: capitalize;
  }

  .top-left-title span {
    color: var(--Primary-color);
    font-weight: 700;
    font-size: 30px;
  }

  .top-left-text {
    font-size: 20px;
    font-weight: 500;
    line-height: 30px;
    margin: 8px 0;
  }

  .top-left-btn {
    background-color: var(--Primary-color);
    color: var(--White-color);
    font-size: 18px;
    font-weight: 500;
    margin: 2rem 0 0;
    text-transform: capitalize;
    border: none;
    border-radius: 10px;
    padding: 1rem 3rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .top-left-btn:hover {
    background-color: transparent;
    border: 1px solid var(--Primary-color);
    color: var(--Primary-color);
  }

  .offer-top-right {
    position: relative;
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .top-right-ball {
    height: 250px;
    width: 250px;
    border-radius: 50%;
    background-color: var(--Primary-color);
  }

  .offer-bottom {
    width: 100%;
    margin: 10rem auto 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .offer-bottom-top {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .bottom-top-title {
    font-size: 29px;
    line-height: 42px;
    text-transform: capitalize;
    text-align: center;
  }

  .bottom-top-btn {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px 30px;
    margin: 3rem 0;
    background-color: var(--Primary-color);
    padding: 1.2rem 0;
    border-radius: 25px;
  }

  .part-time-btn {
    background-color: var(--White-color);
    color: black;
    border: none;
    padding: 8px 16px;
    font-size: 17px;
    text-transform: capitalize;
    border-radius: 20px;
    font-weight: 600;
    cursor: pointer;
  }

  .full-time-btn {
    background-color: var(--White-color);
    color: black;
    border: none;
    padding: 8px 16px;
    font-size: 17px;
    text-transform: capitalize;
    border-radius: 20px;
    font-weight: 600;
    cursor: pointer;
  }

  .offer-bottom-bottom {
    width: 100%;
    margin: 1rem 0 2rem;
  }

  .offer-data {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 768px) {
    margin: 5rem auto 2rem;

    .offer-top {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-flow: column-reverse;
    }

    .bottom-top-title {
    font-size: 24px;
    line-height: 35px;
    
  }

    .offer-top-left {
      width: 98%;
      display: flex;
      flex-direction: column;
      place-items: center;
      place-content: center;
      margin: 2rem auto 0;
    }

    .offer-top-right {
      width: 100%;
      margin: 0 auto 1rem;
      align-items: center;
      justify-content: center;
    }

    .top-left-title {
      font-size: 26px;
      text-align: center;
    }

    .top-left-title span {
      font-size: 28px;
    }

    .top-left-text {
      font-size: 18px;
      /* text-align: center; */
    }

    .top-left-btn {
      font-size: 16px;
      margin: 2rem 0 0;
      padding: 0.9rem 3rem;
    }

    .offer-data {
      justify-content: center;
    }

    .bottom-top-btn {
    width: 100%;
    gap: 30px;
    margin: 2rem 0 1.5rem;
    padding: 1.4rem 0;
  }

  
  .part-time-btn {
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 500;
  }

  .full-time-btn {
    padding: 8px 16px;
    font-size: 16px;
    font-weight: 500;
  }

  }
`;
