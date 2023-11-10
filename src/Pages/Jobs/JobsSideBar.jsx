import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { JobsSideBarContainer } from '../Jobs/JobsSidebar.css';
import { BiFilter } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { fetchApi } from "../../Features/ApiSlice";

function filterPriceText(filterPrice) {
  return `${filterPrice}#`;
}
export const JobsSideBar = ({ updateFilteredJobs, updateTotalJobs }) => {
  //getting data from redux store
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.api.apiData);
  const jobs = apiData.jobs;
  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);
  // Creating the state to update the values of filters by price, Job Category,
  // Job Location and Job Type
  const [filterPrice, setFilterPrice] = useState([0,100]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedJobTypes, setSelectedJobTypes] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  // Creating the categories array from the data from redux store 
  const categoriesArray = [...new Set(jobs?.map(item => item.category))];
  // Creating the locations array from the data from redux store 
  const locations = new Set();
  jobs?.forEach((item) => {
    locations.add(item.candidate_required_location);
  });
  const locationsArray = Array.from(locations);
  // Creating the job type array from the data from redux store 
  const jobType = new Set();
  jobs?.forEach((item) => {
    jobType.add(item.job_type);
  });
  const jobTypeArray = Array.from(jobType);
  // Creating the event handler for the filter by Job Category
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  // Creating the event handler for the filter by Job Type
  const handleJobTypeChange = (event) => {
    const selectedType = event.target.name;
    setSelectedJobTypes((prevTypes) => {
      if (prevTypes.includes(selectedType)) {
        return prevTypes.filter((type) => type !== selectedType);
      } else {
        return [...prevTypes, selectedType];
      }
    });
  };
  // Creating the event handler for the filter by Job Location
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };
  // Creating the event handler for the filter by price
  const handleFilterPrice = (event, newFilterPrice) => {
    setFilterPrice(newFilterPrice);
  };
  // Creating the function to be called when the apply filter button is clicked
  const handleApplyFilter = () => {
    const filteredJobs = jobs?.filter((job) => {
      const matchCategory = selectedCategory === '' || job.category === selectedCategory;
      const matchJobType = selectedJobTypes.length === 0 || selectedJobTypes.includes(job.job_type);
      const matchLocation = selectedLocation === '' || job.candidate_required_location === selectedLocation;
      // const matchPrice = job.salary >= filterPrice[0] && job.salary <= filterPrice[1];
      return matchCategory && matchJobType && matchLocation ;
    });
    const totalFilteredJobs = filteredJobs.length;
    updateFilteredJobs(filteredJobs);
    updateTotalJobs(totalFilteredJobs);
    window.scrollTo(0, 0);
  };
  return (
    <JobsSideBarContainer>
        <div className="filter">
            <BiFilter/>
            <h3>Filter Jobs</h3>
        </div>
        <section>
          <h2>Job Category</h2>
          <select 
            onChange={handleCategoryChange}
          >
            <option value="">All Category</option>
            {categoriesArray?.map((item) => (
              <option key={item.id} >
                {item}
              </option>
            ))}
          </select>
          <h2>Job Type</h2>
            {jobTypeArray?.map((item) => (  
              <label className="custom-checkbox">
              <input
                type="checkbox"
                name={item}
                key={item.id}
                onChange={handleJobTypeChange}
              />
              <span className="checkmark"></span>
                {item}
                <br />
                <br />
              </label>   
            ))}       
          <h2>Job Location</h2>
          <select 
            onChange={handleLocationChange}
          >
            <option value="">All Category</option>
            {locationsArray?.map((item) => (
              <option key={item.id} >
                {item}
              </option>
            ))}
          </select> 
          <h2>Filter Jobs</h2>
          <Box 
            sx={{ 
              width: "90%", 
            }}
          >
            <Slider 
              sx={{  
                color:"var(--White-color)", 
                backgroundColor:"var(--Primary-color)"
              }}
              getAriaLabel={() => 'Temperature range'}
              value={filterPrice}
              onChange={handleFilterPrice}
              valueLabelDisplay="auto"
              getAriaValueText={filterPriceText}
              min={0}
              max={1000}
            />
          </Box>
          <p>Price: ${filterPrice[0]} - ${filterPrice[1]}</p>
        </section>
        <button 
          className="applyFilter"
          onClick={handleApplyFilter}
          >
            Apply Filter
        </button>
    </JobsSideBarContainer>
  )
}