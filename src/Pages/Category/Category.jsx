import React, { useEffect } from "react";
import { CategoryContainer } from "./Category.style";
import { TopCategoryData } from "../../Components/DummyData";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategory } from "../../Features/CatgorySlice";

const Category = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  useEffect(() => {
    console.log("Return Data", category);
  }, [category]);

  console.log("category", category);
  return (
    <CategoryContainer>
      <div className="category-hero"></div>
      <div className="top-category">
        <h2 className="category-title">top category</h2>

        <div className="top-category-container">
          {TopCategoryData.map((data) => (
            <div key={data.id} className="top-category-data">
              <div className="category-icon"></div>
              <div className="category-content">
                <h2 className="category-content-title">{data.title}</h2>
                <p className="category-content-text">{data.available}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CategoryContainer>
  );
};

export default Category;
