import { configureStore } from "@reduxjs/toolkit";
import apiReducer from "../Features/ApiSlice";

export const store = configureStore({
  reducer: {
    api: apiReducer,
  },
});
