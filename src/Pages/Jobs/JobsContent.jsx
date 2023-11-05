import React, { useState } from "react";
import { Section } from "./JobsContent.css";
import { Pagination } from "antd";
import { OfferData } from "../../Components/DummyData";
import { FaLocationDot } from "react-icons/fa6";

export const JobsContent = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = OfferData.slice(startIndex, endIndex);

  return (
    <Section>
      <section className="top">
        <h3>39, 782 Jobs found</h3>
        <div className="topRight">
          <h3>Sort by</h3>
          <select>
            <option value="">None</option>
            <option value="option1">Job List</option>
            <option value="option2">Job List</option>
            <option value="option3">Job List</option>
            <option value="option4">Job List</option>
          </select>
        </div>
      </section>
      <section className="jobCardContainer">
        {currentData.map((item) => (
          <div className="jobCard" key={item.id}>
            <div className="jobCardFirst">
              <img className="jobImg" src={item.avatar} alt={item.job} />
            </div>
            <div className="jobCardSecond">
              <h3>{item.job}</h3>
              <p>{item.company}</p>
              <div className="jobCardLocation">
                <FaLocationDot />
                <p>{item.location}</p>
              </div>
              <p>${item.salary}</p>
            </div>
            <div className="jobCardThird">
              <button className="jobCardButton">Full Time</button>
              <p>10 hours ago</p>
            </div>
          </div>
        ))}
      </section>
      <div className="pagination-container">
        <Pagination
          className="pagination"
          defaultCurrent={1}
          total={500}
          onChange={(page) => setCurrentPage(page)}
        />
      </div>
    </Section>
  );
};
