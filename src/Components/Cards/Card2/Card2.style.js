import styled from "styled-components";

export const CardTwo = styled.div`
  width: 380px;
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
    margin: 2rem 0 1.5rem;
    width: 80px;
    height: 80px;
    background-color: var(--White-color);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .cardtwo-avatar img {
    width: 90%;
    height: 90%;
  }

  .cartwo-content {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .card-job-title {
    font-size: 25px;
    font-weight: 600;
    margin: 1rem 0 0.5rem;
    text-align: center;
    color: var(--White-color);
    text-transform: capitalize;
  }

  .job-company {
    font-size: 22px;
    font-weight: 500;
    color: var(--White-color);
    text-align: center;
    text-transform: capitalize;
  }

  .cardtwo-data-container {
    margin: 3rem 0 1.5rem;
  }

  .data-amount,
  .data-location {
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 1.5rem 0;
    color: var(--White-color);
  }

  .data-amount,
  .data-location p {
    font-size: 22px;
    font-weight: 500;
    text-transform: capitalize;
  }

  .card2-btn-container {
    margin: 2.5rem 0 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  .heart {
    background-color: var(--White-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.9rem;
  }

  .card2-apply-btn {
    padding: 0.9rem 1.8rem;
    font-size: 20px;
    font-weight: 600;
    background-color: var(--White-color);
    color: var(--Primary-color);
    border: none;
    border-radius: 25px;
    cursor: pointer;
  }




  @media screen and (max-width: 768px) {
    margin: 1.3rem 0;
    width: 320px;
    
  .data-amount,
  .data-location p {
    font-size: 18px;
  }

  .card2-btn-container {
    gap: 20px;
  }

  .heart {
    padding: 0.7rem;
  }

  .card2-apply-btn {
    padding: 0.7rem 1.5rem;
    font-size: 18px;
  }


  
  }
`;
