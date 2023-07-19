import styled from "styled-components";

export const Testimonial = styled.div`
  background-color: var(--Primary-color);
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem 0 1rem;
  border-radius: 20px 0 20px 0;

  .test-card-top {
    width: 90px;
    height: 90px;
    background-color: var(--White-color);
    /* border: 1px solid #222; */
    /* border-radius: 50%; */
    margin-bottom: -35px;
    clip-path: polygon(
      30% 0%,
      70% 0%,
      100% 30%,
      100% 70%,
      70% 100%,
      30% 100%,
      0% 70%,
      0% 30%
    );
    z-index: 1;
  }

  .test-card-bottom {
    width: 90%;
    margin: 0 auto;
    background-color: var(--White-color);
    display: flex;
    flex-direction: column;
    align-items: center;

    border-radius: 15px;
    padding: 0.1rem 0.2rem 1rem;
  }

  .test-card-content {
    width: 90%;
    /* display: flex;
    align-items: center;
    flex-direction: column; */
    margin: 1rem auto 0.4rem;
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
`;
