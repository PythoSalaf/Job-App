import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../Features/CatgorySlice";

export const store = configureStore({
  reducer: {
    category: categoryReducer,
  },
});
