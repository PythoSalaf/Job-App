import styled from "styled-components";

export const Testimonial = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0 1rem;
  border-radius: 20px 0 20px 0;
  position: relative;

  .test-card-top {
    width: 100px;
    height: 100px;
    background-color: #ededed;
    border: 1px solid var(--Primary-color);
    border-radius: 50%;
    margin-bottom: -45px;
    z-index: 1;
    position: relative;
  }

  .test-card-top img {
    width: 100%;
    height: 95%;
    border-radius: 50%;
  }

  .test-card-bottom {
    width: 90%;
    margin: 0 auto;
    background-color: var(--Primary-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    border-radius: 15px;
    padding: 0.1rem 0.2rem 1rem;
  }

  .test-card-content {
    width: 100%;
    margin: 1rem auto 0.4rem;
    color: var(--White-color);
  }

  .test-card-content-top {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 2rem 0 1rem;
  }

  .star-here {
    margin: 0.2rem 0;
  }

  .content-name {
    font-size: 20px;
    font-weight: 600;
    margin: 0.2rem 0 0.5rem;
  }

  .content-company {
    font-size: 18px;
    font-weight: 500;
    margin: 0 0 0.5rem;
  }

  .content--text {
    text-align: center;
    font-size: 16px;
    padding: 0 2px;
    margin: 1rem 0 0;
  }

  .qoute-left {
    position: absolute;
    top: -10px;
    left: 20px;
    color: orange;
  }

  .qoute-right {
    position: absolute;
    top: -10px;
    right: 20px;
    color: orange;
  }
`;
