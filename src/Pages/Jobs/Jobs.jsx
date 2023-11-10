import React from 'react'
import styled from "styled-components";
import { useState } from 'react';
import { JobsSideBar } from './JobsSideBar';
import { JobsContent } from './JobsContent';

const Jobs = () => {
  const [totalJobs, setTotalJobs] = useState(0);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filterCriteria, setFilterCriteria] = useState({
    selectedCategory: '',
    selectedJobTypes: [],
    selectedLocation: '',
    filterPrice: [0, 100],
  });
  const updateFilteredJobs = (filteredJobs) => {
    setFilteredJobs(filteredJobs);
  };
  const updateTotalJobs = (totalJobs) => {
    setTotalJobs(totalJobs);
  };
  return (
    <Section>
      <JobsSideBar
        updateFilteredJobs={updateFilteredJobs}
        filterCriteria={filterCriteria}
        setFilterCriteria={setFilterCriteria}
        updateTotalJobs={updateTotalJobs}
      />
      <JobsContent
        filteredJobs={filteredJobs}
        totalJobs={totalJobs}
      />
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