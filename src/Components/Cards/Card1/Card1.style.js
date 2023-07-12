import styled from "styled-components";

export const Card = styled.section`
  .card1-container {
    width: 300px;
    height: 384px;
    background: var(--Primary-color);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    border-radius: 20px;
    margin: 1rem 0;
  }

  .card1-content {
    z-index: 1;
    color: white;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .card1-container::before {
    content: "";
    position: absolute;
    width: 120px;
    background-image: linear-gradient(
      180deg,
      rgb(245, 123, 27),
      rgb(255, 48, 255)
    );
    height: 130%;
    animation: rotBGimg 3s linear infinite;
    transition: all 0.2s linear;
  }

  @keyframes rotBGimg {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  .card1-container::after {
    content: "";
    position: absolute;
    background: var(--Primary-color);
    inset: 5px;
    border-radius: 15px;
  }

  .card1-icon-container {
    background-color: var(--White-color);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    place-items: center;
    place-content: center;
  }

  svg {
    width: 45px;
    height: 45px;
  }

  .card1-icon {
    color: var(--Primary-color);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card1-title {
    margin: 3rem 0 2rem;
    font-size: 25px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .card1-content {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    text-transform: capitalize;
    text-align: center;
  }
`;
