import React from 'react'
import styled from "styled-components";
import { JobsSideBar } from './JobsSideBar';
import { JobsContent } from './JobsContent';

const Jobs = () => {
  return (
    <Section>
      <JobsSideBar/>
      <JobsContent/>
    </Section>
  )
}
const Section = styled.section`
  display: flex;
  margin: 15vh 0 0 0;
  @media screen and (max-width: 426px) {
    display: flex;
    flex-direction: column;
}
`
export default Jobs;