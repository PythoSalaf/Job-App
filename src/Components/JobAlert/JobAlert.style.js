import styled from "styled-components";

export const JobAlertContainer = styled.section`
  width: 95%;
  margin: 5rem auto;

  .alert-top-content {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    flex-direction: column;
  }

  .alert-top-title {
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
  }

  .alert-top-text {
    font-size: 20px;
    font-weight: 500;
    margin: 1rem 0 4rem;
  }

  .alert-top-main {
    width: 90%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-content: center;
    place-items: center;
    margin: 0 auto;
    gap: 40px 20px;
  }

  .item-icon {
    width: 70px;
    height: 70px;
    background-color: var(--White-color);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item-icon img {
    width: 50%;
    height: 50%;
  }

  .alert-top-container {
    background-color: var(--White-color);
    width: 300px;
    display: flex;
    align-items: flex-start;
    padding: 2rem 1rem;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 15px;
    gap: 30px;
  }

  .alert-content-title {
    font-size: 23px;
    font-weight: 600;
    text-transform: capitalize;
    cursor: pointer;
  }

  .alert-content-title:hover {
    color: var(--Primary-color);
  }

  .alert-content-conpany {
    margin: 0.8rem 0 1.5rem;
    font-size: 18px;
    text-transform: capitalize;
  }

  .default-btn {
    background-color: green;
    color: var(--White-color);
    width: fit-content;
    padding: 10px 18px;
    border: none;
    border-radius: 15px;
    font-size: 15px;
    font-weight: 500;
    text-transform: capitalize;
    cursor: pointer;
  }

  .secondary-btn {
    background-color: blue;
    color: var(--White-color);
    width: fit-content;
    padding: 10px 18px;
    border: none;
    border-radius: 15px;
    font-size: 15px;
    font-weight: 500;
    text-transform: capitalize;
    cursor: pointer;
  }

  .primary-btn {
    color: var(--White-color);
    width: fit-content;
    padding: 10px 18px;
    border: none;
    border-radius: 15px;
    font-size: 15px;
    font-weight: 500;
    text-transform: capitalize;
    cursor: pointer;
    background-color: orangered;
  }

  .terciary-btn {
    color: var(--White-color);
    width: fit-content;
    padding: 8px 12px;
    border: none;
    border-radius: 15px;
    font-size: 15px;
    font-weight: 500;
    text-transform: capitalize;
    cursor: pointer;
    background-color: orange;
  }

  .job-alert-btn-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3rem 0 0;
  }

  .alert-btns {
    padding: 0.8rem 1.6rem;
    font-size: 18px;
    font-weight: 500;
    color: var(--White-color);
    background-color: var(--Primary-color);
    border-radius: 10px;
    border: none;
    cursor: pointer;
    text-transform: capitalize;
  }

  @media screen and (max-width: 768px) {
    .alert-top-main {
      grid-template-columns: repeat(2, 1fr);
      margin: 0 auto;
      gap: 20px;
    }
    .alert-top-container {
      width: 100%;
      gap: 30px;
    }

    .alert-btns {
      padding: 0.7rem 1.4rem;
      font-size: 16px;
    }
  }

  @media screen and (max-width: 425px) {
    .alert-top-main {
      width: 98%;
      grid-template-columns: repeat(1, 1fr);
    }

    .alert-top-title {
      font-size: 26px;
    }

    .alert-top-text {
      font-size: 18px;
      text-align: center;
      margin: 1.2rem 0 4rem;
      line-height: 30px;
    }

    .alert-top-container {
      width: 100%;
      gap: 40px;
    }

    .alert-content-title {
      font-size: 20px;
      color: var(--Primary-color);
    }

    .alert-content-title:hover {
      display: none;
    }

    .alert-content-conpany {
      margin: 0.8rem 0 1.5rem;
      font-size: 16px;
    }

    .item-icon {
      width: 60px;
      height: 60px;
    }

    .item-icon img {
      width: 45%;
      height: 45%;
    }

    .alert-btns {
      padding: 0.6rem 1.3rem;
      font-size: 15px;
    }
  }
`;
