import styled from "styled-components";

export const Deatail = styled.section`
  width: 100%;
  margin: 6rem 0 3rem;
  .detail-hero {
    width: 100%;
    height: 50vh;
    position: relative;
  }
  .detail-hero img {
    width: 100%;
    height: 100%;
  }

  .job-detail-icon {
    position: absolute;
    left: 20px;
    bottom: -40px;
    height: 100px;
    width: 100px;
  }

  .job-detail-icon img {
    width: 100%;
    border-radius: 10px;
  }

  .app-detail-container {
    position: relative;
    width: 95%;
    margin: 3rem auto 2rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    /* background-color: #e0eeff; */
    /* padding: 4rem 0; */
  }

  .app-detail-left {
    width: 70%;
  }
  .app-detail-right {
    width: 28%;
  }
`;
