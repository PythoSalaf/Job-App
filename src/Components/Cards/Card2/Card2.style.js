import styled from "styled-components";

export const CardTwo = styled.div`
  width: 260px;
  background: var(--Primary-color);
  transition: 1s ease-in-out;
  clip-path: polygon(
    30px 0%,
    100% 0,
    100% calc(100% - 30px),
    calc(100% - 30px) 100%,
    0 100%,
    0% 30px
  );
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .cardtwo-avatar {
    margin: 1.5rem 0 1rem;
    width: 50px;
    height: 50px;
    background-color: var(--White-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .cardtwo-avatar img {
    width: 70%;
    height: 70%;
  }

  .cartwo-content {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .card-job-title {
    font-size: 20px;
    font-weight: 600;
    margin: 0.8rem 0 0.6rem;
    text-align: center;
    color: var(--White-color);
    text-transform: capitalize;
  }

  .job-company {
    font-size: 18px;
    font-weight: 600;
    color: var(--White-color);
    text-align: center;
    text-transform: capitalize;
  }

  .cardtwo-data-container {
    margin: 1.6rem 0 1.5rem;
    width: 100%;
  }

  .data-amount,
  .data-location {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin: 1rem 0;
    color: var(--White-color);
  }

  .data-amount,
  .data-location p {
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
  }

  .card2-btn-container {
    margin: 2rem 0 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .heart {
    background-color: var(--White-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.6rem;
  }

  .card2-apply-btn {
    padding: 0.4rem 0.8rem;
    font-size: 14px;
    font-weight: 500;
    background-color: var(--White-color);
    color: var(--Primary-color);
    border: none;
    border-radius: 25px;
    cursor: pointer;
  }




  @media screen and (max-width: 768px) {
    margin: 1.3rem 0;
    
    .cardtwo-avatar {
    width: 50px;
    height: 50px;
  }

  .cardtwo-avatar img {
    width: 70%;
    height: 70%;
  }


  .data-amount,
  .data-location p {
    font-size: 15px;
  }

  .card2-btn-container {
    gap: 20px;
  }

  .heart {
    padding: 0.7rem;
  }

  .card2-apply-btn {
    padding: 0.7rem 1.5rem;
    font-size: 14px;
  }


  
  }
`;
