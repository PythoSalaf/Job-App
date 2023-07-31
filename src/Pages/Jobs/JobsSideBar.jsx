import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { JobsSideBarContainer } from '../Jobs/JobsSidebar.css';
import { BiFilter } from "react-icons/bi";

function filterPriceText(filterPrice) {
  return `${filterPrice}#`;
}
export const JobsSideBar = () => {
  const [filterPrice, setFilterPrice] = useState([0,100]);

  const handleFilterPrice = (event, newFilterPrice) => {
    setFilterPrice(newFilterPrice);
  };

  // function filterPriceText(filterPrice) {
  //   return `${filterPrice}#`;
  // }
  
  return (
    <JobsSideBarContainer>
        <div className="filter">
            <BiFilter/>
            <h3>Filter Jobs</h3>
        </div>
        <section>
            <h2>Job Category</h2>
            <select>
                <option value="">All Category</option>
                <option value="option1">Category 1</option>
                <option value="option2">Category 2</option>
                <option value="option3">Category 3</option>
                <option value="option4">Category 4</option>
            </select>
            <h2>Job Type</h2>
            <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="fullTime"
                />
                <span className="checkmark"></span>
                Full Time
            </label>
            <br />
            <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="partTime"
                />
                <span className="checkmark"></span>
                Part Time
            </label>
            <br />
            <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="remote"
                />
                <span className="checkmark"></span>
                Remote
            </label>
            <br />
            <label className="custom-checkbox">
                <input
                 type="checkbox"
                 name="freelance"
                />
                <span className="checkmark"></span>
                Freelance
            </label>
            <h2>Job Location</h2>
            <select>
                <option value="">Anywhere</option>
                <option value="option1">Category 1</option>
                <option value="option2">Category 2</option>
                <option value="option3">Category 3</option>
                <option value="option4">Category 4</option>
            </select>
            <h2>Experience</h2>
            <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="1-2years"
                />
                <span className="checkmark"></span>
                1-2years
            </label>
            <br />
            <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="2-3years"
                />
                <span className="checkmark"></span>
                2-3years
            </label>
            <br />
            <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="3-6years"
                />
                <span className="checkmark"></span>
                3-6years
            </label>
            <br />
            <label className="custom-checkbox">
                <input
                 type="checkbox"
                 name="6-more..."
                />
                <span className="checkmark"></span>
                6-more...
            </label>
            <h2>Posted Within</h2>
            <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="Any"
                />
                <span className="checkmark"></span>
                Any
            </label>
            <br />
            <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="Today"
                />
                <span className="checkmark"></span>
                Today
            </label>
            <br />
            <label className="custom-checkbox">
                <input
                  type="checkbox"
                  name="Last2days"
                />
                <span className="checkmark"></span>
                Last 2 days
            </label>
            <br />
            <label className="custom-checkbox">
                <input
                 type="checkbox"
                 name="Last3days"
                />
                <span className="checkmark"></span>
                Last 3 days
            </label>
            <br />
            <label className="custom-checkbox">
                <input
                 type="checkbox"
                 name="Last5days"
                />
                <span className="checkmark"></span>
                Last 5 days
            </label>
            <br />
            <label className="custom-checkbox">
                <input
                 type="checkbox"
                 name="Last10days"
                />
                <span className="checkmark"></span>
                Last 10 days
            </label>
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
    </JobsSideBarContainer>
  )
}