import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import api from "../Api/api";
import axios from "axios";
// import { API_ID, API_BASE_URL, API_KEY } from "../Api/api";

const initialState = {
  status: "idle",
  category: [],
  error: null,
};

// Async thunk to fetch data from the API
export const fetchCategory = createAsyncThunk(
  "data/fetchCategory",
  async () => {
    const response = await axios.get(
      "https://api.adzuna.com/v1/api/jobs/gb/categories?app_id=5aab2566&app_key=1b8f9917c0197a5c4bd229a7da492267"
    );

    return response.data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategory: (state, { payload }) => {
      state.response = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.response = action.payload;
      });
  },
});

export const { getCategory } = categorySlice.actions;

export default categorySlice.reducer;
