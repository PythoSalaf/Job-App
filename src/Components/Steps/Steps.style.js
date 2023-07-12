import styled from "styled-components";

export const StepContainer = styled.section`
  width: 96%;
  margin: 5rem auto 0;

  .step-top {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 2rem auto;
  }

  .step-top h4 {
    font-size: 26px;
    font-weight: 600;
    color: var(--Primary-color);
  }

  .step-top h2 {
    margin: 2rem 0;
    font-size: 32px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .step-top p {
    font-size: 23px;
    font-weight: 600;
    line-height: 35px;
  }

  .step-middle {
    width: 100%;
    margin: 4rem 0 ;
  }

  .step-data {
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .step-bottom {
    width: 100%;
    margin: 10rem 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }


  .step-bottom-right {
    flex: 1;
  }
  
  .step-bottom-left {
    flex: 2;
  }

.step-bottom-tittle {
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 3rem;
    text-transform: capitalize;
}

  .always-data-container {
    display: flex;
    align-items: flex-start;
    gap: 30px 40px;
    margin: 2rem 0;
  }

  .always-avatar {
    width: 65px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--Primary-color);
    border-radius: 10px;
  }

  .always-content h3 {
    font-size: 25px;
    font-weight: 600;
    line-height: 38px;
    text-transform: capitalize;
  }

  .always-content p {
    font-size: 22px;
    font-weight: 500;
  }




@media screen and (max-width:768px) {
    
  .step-bottom {
   flex-direction: column;
    justify-content: center;
  }

  .step-data {
    justify-content: center;
  }

  .step-bottom-tittle {
    font-size: 25px;
    text-align: center;
}


.always-content h3 {
    font-size: 23px;
  }


}


@media screen and (max-width: 425px) {
    .step-data {
    justify-content: center;
  }
}

`;
