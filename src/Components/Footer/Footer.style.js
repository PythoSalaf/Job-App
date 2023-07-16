import styled from "styled-components";

export const FooterContainer = styled.section`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  padding: 2rem 0 0;

  .footer-top {
    width: 90%;
    margin: 1rem auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer-top-left {
    width: 60%;
    height: 2px;
    background-color: var(--Primary-color);
    border-radius: 20px;
  }

  .footer-top-middle {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .top-middle-title {
    font-size: 32px;
    font-weight: 700;
    color: var(--Primary-color);
    line-height: 40px;
  }
  .top-middle-title span {
    color: red;
  }

  .footer-top-right {
    width: 60%;
    height: 2px;
    background-color: var(--Primary-color);
    border-radius: 20px;
  }

  .footer-middle {
    width: 85%;
    margin: 3rem auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .middle-left {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 30%;
  }

  .middle-left a {
    text-decoration: none;
    color: var(--Primary-color);
    margin: 0.3rem 0;
    font-size: 18px;
    font-weight: 600;
  }

  .middle-icons {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .middle-icons-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }

  .social-icon {
    width: 60px;
    height: 40px;
    color: var(--Primary-color);
    cursor: pointer;
  }

  .middle-line {
    margin: 3rem 0 1rem;
    width: 2px;
    height: 105px;
    background-color: var(--Primary-color);
  }

  .middle-right {
    width: 30%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .middle-right a {
    text-decoration: none;
    color: var(--Primary-color);
    margin: 0.3rem 0;
    font-size: 18px;
    font-weight: 600;
  }

  .footer-bottom {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .sub-title {
    color: var(--Primary-color);
    font-size: 23px;
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 0 2rem;
  }

  .sub-field {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
  }

  .sub-field input {
    margin: 0 0 2rem;
    height: 45px;
    width: 40%;
    padding: 0 0 0 15px;
    border: 1px solid var(--Primary-color);
    outline: none;
    font-size: 18px;
    font-weight: 500;
  }

  .sub-btn {
    padding: 0.8rem 1.5rem;
    font-size: 18px;
    font-weight: 500;
    background-color: var(--Primary-color);
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    color: var(--White-color);
    cursor: pointer;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3rem 0 0;
    color: var(--Primary-color);
  }

  .footer-content-title {
    margin: 0 0 1rem;
    font-size: 22px;
    font-weight: 600;
    line-height: 35px;
  }

  .footer-content-title span {
    color: black;
    font-size: 24px;
  }

  .footer-content-text {
    font-size: 19px;
    font-weight: 500;
    margin: 0 0 1rem;
  }

  @media screen and (max-width: 1024px) {
    .footer-middle {
      width: 92%;
    }

    .top-middle-title {
      font-size: 35px;
      line-height: 35px;
    }

    .middle-left {
      width: 40%;
    }

    .middle-left a {
      font-size: 20px;
    }

    .middle-icons {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .middle-icons-container {
      gap: 20px;
    }

    .social-icon {
      width: 40px;
      height: 40px;
    }

    .middle-line {
      margin: 2.5rem 0 1rem;
    }

    .middle-right {
      width: 40%;
    }

    .middle-right a {
      font-size: 20px;
    }

    .sub-title {
      font-size: 26px;
    }

    .sub-field {
      width: 90%;
    }

    .sub-field input {
      width: 50%;
    }

    .footer-content-title {
      font-size: 20px;
      margin: 0 0 1rem;
    }

    .footer-content-title span {
      font-size: 23px;
    }

    .footer-content-text {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 768px) {
    .footer-middle {
      width: 100%;
    }

    .top-middle-title {
      font-size: 27px;
    }


    .middle-left a {
      font-size: 16px;
    }

    .middle-icons {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .middle-icons-container {
      gap: 12px;
    }

    .social-icon {
      width: 30px;
      height: 30px;
    }

    .middle-right .middle-left {
      width: 40%;
    }

    .middle-line {
      margin: 2rem 0 0.5rem;
    }

    .middle-line {
    margin: 3rem 0 0.2rem;
    height: 95px;
  }

    .middle-right a {
      font-size: 16px;
    }

    .sub-title {
      font-size: 22px;
    }

    .sub-field {
      width: 95%;
    }

    .sub-field input {
      width: 80%;
    }

    .footer-content-title {
      font-size: 18px;
    }

    .footer-content-title span {
      font-size: 24px;
    }

    .footer-content-text {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 425px) {
   

    .top-middle-title {
      font-size: 28px;
    }



    .middle-icons {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .middle-icons-container {
      gap: 15px;
    }

    .social-icon {
      width: 35px;
      height: 35px;
    }

    .middle-right a .middle-left a {
      font-size: 16px;
    }

    .sub-title {
      font-size: 20px;
    }

    .sub-field {
      width: 100%;
    }

    .sub-field input {
      width: 90%;
      height: 40px;
      font-size: 16px;
      color: black;
    }

    .sub-btn {
    padding: 0.6rem 1.4rem;
    font-size: 14px;
  }

    .footer-content-title {
      font-size: 14px;
    }

    .footer-content-title span {
      font-size: 16px;
    }

    .footer-content-text {
      font-size: 14px;
    }
  }
`;
