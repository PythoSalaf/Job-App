import styled from "styled-components";

export const AdvertContainer = styled.div`
  width: 90%;
  margin: 2rem auto 1rem;
  background-color: var(--Primary-color);
  color: var(--White-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  .advert-content {
    margin: 2rem auto;
  }

  .advert-content h3 {
    text-align: center;
    text-transform: capitalize;
    font-size: 22px;
    font-weight: 600;
    line-height: 30px;
    margin: 0 0 0.6rem;
  }

  .advert-content p {
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 28px;
  }
`;
