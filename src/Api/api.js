import axios from "axios";
export const API_BASE_URL = "https://developer.adzuna.com/v1";
export const API_ID = "5aab2566";
export const API_KEY = "1b8f9917c0197a5c4bd229a7da492267";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export default api;
