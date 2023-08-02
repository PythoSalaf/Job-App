import styled from "styled-components";

export const CategoryContainer = styled.section`
  margin: 6rem 0 4rem;
  width: 100%;

  .category-hero {
    background-color: lightblue;
    height: 50vh;
    width: 100%;
    margin: 0 0 2rem;
  }

  .top-category {
    width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .category-title {
    font-size: 30px;
    font-weight: 700;
    margin: 0 0 2rem;
    text-transform: uppercase;
  }

  .top-category-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px 10px;
    place-items: center;
    margin: 0 auto;
  }

  .top-category-data {
    width: 280px;
    background-color: var(--Primary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    border-radius: 10px;
  }

  .category-icon {
    width: 50px;
    height: 50px;
    background-color: var(--White-color);
    border-radius: 50%;
  }

  .category-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .category-content-title {
    margin: 1rem 0;
    font-size: 22px;
  }

  .category-content-text {
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
  }

  @media screen and (max-width: 1225px) {
    .top-category-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (max-width: 1024px) {
    .top-category-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 768px) {
    .top-category-container {
      width: 100%;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (max-width: 599px) {
    .top-category-container {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
