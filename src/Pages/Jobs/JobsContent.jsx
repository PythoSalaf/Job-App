import React, { useState, useEffect } from "react";
import { Section } from "./JobsContent.css";
import { Pagination } from "antd";
import { FaLocationDot } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import { fetchApi } from "../../Features/ApiSlice";

export const JobsContent = ({filteredJobs, totalJobs}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.api.apiData);
  const jobs = apiData.jobs;
  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);
  //pagination
  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredJobs?.length > 0 ? filteredJobs?.slice(startIndex, endIndex) : jobs?.slice(startIndex, endIndex);

  return (
    <Section>
      <section className="top">
        {totalJobs>1 ? <h3>{totalJobs} Jobs found</h3> : ""}
      </section>
      <section className="jobCardContainer">
        {currentData?.map((item) => (
          <div className="jobCard" key={item.id}>
            <div className="jobCardFirst">
              <img className="jobImg" src={item.company_logo} alt={item.category} />
            </div>
            <div className="jobCardSecond">
              <h3>{item.category}</h3>
              <p>{item.company_name}</p>
              <div className="jobCardLocation">
                <FaLocationDot />
                <p>{item.candidate_required_location}</p>
              </div>
              <p>{item.salary}</p>
            </div>
            <div className="jobCardThird">
              <button className="jobCardButton">{item.job_type}</button>
              <p>10 hours ago</p>
            </div>
          </div>
        ))}
      </section>
      <div className="pagination-container">
        <Pagination
          className="pagination"
          defaultCurrent={1}
          total={5000}
          backgroundColor={`#F4F4F4`}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </Section>
  );
};