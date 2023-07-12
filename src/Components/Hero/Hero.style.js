import styled from "styled-components";

export const HeroContainer = styled.section`
  width: 100%;
  margin: 4rem 0 3rem;

  .hero {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .hero-left {
    width: 70%;
  }

 

  .hero-title {
    font-size: 40px;
    font-weight: 600;
    text-transform: capitalize;
    line-height: 60px;
    margin: 0 0 3rem;
  }

  .hero-title span {
    color: var(--Primary-color);
  }

  .hero-text {
    font-size: 28px;
    font-weight: 500;
    margin: 0 0 3.5rem;
    line-height: 40px;
  }

  .hero-content {
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1.5rem;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  }

  .hero-field-icon {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .hero-icon {
    width: 35px;
    height: 35px;
    color: var(--Primary-color);
  }

  .hero-input {
    height: 35px;
    border: 1px solid var(--Primary-color);
    outline: none;
    padding: 0 0 0 8px;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
  }

  .hero-btn {
    padding: 10px 25px;
    font-size: 20px;
    font-weight: 500;
    background-color: var(--Primary-color);
    color: var(--White-color);
    border: none;
    border-radius: 5px;
    text-transform: capitalize;
  }


  .hero-right {
    width: 30%;
  }
.hero-right img {
    width: 80%;
}

@media screen and (max-width: 1024px) {
    .hero-left {
        width: 60%;
    }

    .hero-right {
        width: 40%;
    }

   

}

@media screen and (max-width: 768px) {
    .hero {
        flex-direction: column;
        /* flex-flow: column-reverse; */
    }

    .hero-left, .hero-right {
        width: 100%;
    }

    .hero-right {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 3rem auto 0;
    }

    .hero-right img {
        width: 70% ;
    }

    .hero-content {
        width: 100%;
    }

    .hero-title {
    font-size: 34px;
    line-height: 50px;
    margin: 0 0 2rem;
  }


  .hero-text {
    font-size: 23px;
    line-height: 35px;
  }
}

@media screen and (max-width: 425px) {
    .hero-title {
    font-size: 26px;
    line-height: 45px;
    margin: 0 0 2rem;
  }


  .hero-text {
    font-size: 20px;
    line-height: 30px;
  }
}


`;
