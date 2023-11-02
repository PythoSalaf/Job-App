import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: "idle",
  apiData: [],
  error: null,
};

// Async thunk to fetch data from the API
export const fetchApi = createAsyncThunk("data/fetchCategory", async () => {
  const response = await axios.get("https://remotive.com/api/remote-jobs?");
  console.log("Response", response.data.jobs);

  return response.data;
});

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    // getApi: (state, { payload }) => {
    //   state.response = payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchApi.fulfilled, (state, { payload }) => {
        state.apiData = payload;
        state.status = "idle";
      })
      .addCase(fetchApi.rejected, (state, { payload }) => {
        state.error = payload;
      });
  },
});

export const { getApi } = apiSlice.actions;

export default apiSlice.reducer;
