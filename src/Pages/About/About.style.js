import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 100%;
  margin-top: 4rem;
  .about-hero {
    background-color: #222;
    height: 70vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about-hero-title {
    font-size: 35px;
    color: var(--White-color);
    text-transform: uppercase;
  }

  .about-slider {
    width: 80%;
    margin: 1rem auto;
  }

  .about-top-icon {
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    .about-hero {
      height: 60vh;
    }
  }
`;
