import axios from "axios";
import { environmentVariables } from "../../env/environmentVariables";

export const axiosInstance = axios.create({
  baseURL: "https://newsdata.io/api/1/news",
  params: {
    apikey: environmentVariables.newsApiKey,
    country: "au,us",
    image: 1,
  },
});
