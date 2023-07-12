import styled from "styled-components";

export const ErrorContainer = styled.section`
  width: 98%;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .error-container {
    width: 60%;
    background-color: var(--Primary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    border-radius: 20px;
  }

  .error-content {
    width: 90%;
    background-color: var(--White-color);
    margin: 3rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 100px 1px;
  }

  .error-img {
    width: 60%;
  }

  .error-content-text {
    margin: -3rem 0 2rem;
  }

  .error-text {
    font-size: 40px;
    font-weight: 600;
    line-height: 40px;
    color: var(--Primary-color);
    text-transform: uppercase;
  }

  .error-field {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3rem 0 1rem;
    width: 100%;
  }

  .error-field input {
    width: 70%;
    height: 55px;
    border: 1px solid var(--Primary-color);
    padding-left: 10px;
    font-size: 22px;
    font-weight: 600;
    border-radius: 5px 0 0 5px;
    outline: none;
  }

  .error-field-btn {
    width: 30%;
    padding: 1rem 1.4rem;
    border-radius: 0 5px 5px 0;
    border: 1px solid var(--Primary-color);
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    background-color: var(--Primary-color);
    color: var(--White-color);
  }

  .error-to-home {
    margin: 0 0 2rem;
  }

  .error-to-home-btn {
    background-color: var(--Primary-color);
    padding: 1.2rem 2.2rem;
    border: 1px solid var(--White-color);
    font-size: 20px;
    font-weight: 600;
    color: var(--White-color);
    outline: none;
    cursor: pointer;
    border-radius: 8px;
  }

  @media screen and (max-width: 1024px) {
    .error-container {
      width: 75%;
    }

    .error-img {
      width: 70%;
    }

    .error-text {
      font-size: 35px;
    }

    .error-field input {
      font-size: 20px;
    }

    .error-to-home-btn {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 768px) {
    .error-container {
      width: 95%;
    }

    .error-content {
      border-radius: 60px 1px;
    }

    .error-img {
      width: 68%;
    }

    .error-text {
      font-size: 30px;
    }

    .error-content {
      width: 94%;
    }

    .error-field input {
      font-size: 20px;
    }

    .error-to-home-btn {
      font-size: 18px;
    }
  }

  @media screen and (max-width: 425px) {
    .error-container {
      width: 96%;
    }

    .error-content {
      border-radius: 50px 1px;
    }

    .error-img {
      width: 60%;
    }

    .error-text {
      font-size: 23px;
      text-align: center;
      margin: 1rem 0 0;
    }

    .error-field input {
      font-size: 20px;
      width: 65%;
      height: 40px;
    }

    .error-to-home-btn {
      font-size: 16px;
    }

    .error-field-btn {
      width: 29%;
      padding: 0.6rem 1.6rem;
      font-size: 16px;
    }
  }
`;
