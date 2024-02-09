import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://newsdata.io/api/1/news",
});
