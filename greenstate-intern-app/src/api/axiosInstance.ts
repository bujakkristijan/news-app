import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://newsdata.io/api/1/news",
  params: {
    apikey: import.meta.env.VITE_REACT_APP_NEWS_API_KEY,
    country: "au,us",
    image: 1,
  },
});
