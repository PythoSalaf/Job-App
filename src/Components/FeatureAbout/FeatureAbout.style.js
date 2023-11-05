import styled from "styled-components";

export const FeaturedContainer = styled.section`
  width: 90%;
  margin: 2rem auto;

  .feature-about-top {
    width: 100%;
    margin: 4rem auto 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .feature-about-top-left {
    width: 45%;
  }

  .about-top-title {
    font-size: 36px;
    font-weight: 700;
    line-height: 40px;
    text-transform: capitalize;
  }

  .about-top-subtitle {
    font-size: 22px;
    font-weight: 500;
    line-height: 30px;
    margin: 2rem 0;
  }

  .about-top-text {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 2rem;
  }

  .about-top-btn {
    font-size: 18px;
    font-weight: 500;
    background-color: var(--Primary-color);
    padding: 15px 40px;
    color: var(--White-color);
    border-radius: 10px;
    border: none;
    text-transform: capitalize;
    cursor: pointer;
  }

  .feature-about-top-right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .feature-about-bottom {
    background-color: var(--Primary-color);
    width: 100%;
    margin: 6rem 0;
    padding: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .about-bottom-subtitle {
    font-size: 20px;
    font-weight: 500;
    color: var(--White-color);
  }

  .about-bottom-title {
    font-size: 26px;
    font-weight: 700;
    color: var(--White-color);
    margin: 1rem 0 0;
    text-transform: capitalize;
  }

  .about-bottom-container {
    width: 95%;
    margin: 3rem auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* flex-wrap: wrap; */
    gap: 20px;
  }

  .data-container {
    /* width: 30%; */
    background-color: var(--White-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    border-radius: 10px;
  }

  .data-icon {
    width: 70px;
    height: 70px;
    background-color: var(--Primary-color);
    border-radius: 50%;
    border: none;
  }

  .data-title {
    margin: 1.3rem 0;
    font-size: 25px;
    font-weight: 600;
  }

  .data-content {
    font-size: 18px;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    .feature-about-top {
      flex-direction: column;
      justify-content: center;
    }

    .feature-about-top-left {
      width: 98%;
    }

    .feature-about-top-right {
      width: 98%;
      margin-top: 5rem;
    }

    .about-bottom-container {
      flex-direction: column;
    }
  }
`;
