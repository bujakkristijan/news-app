import { NewsPostPublicAPIResponse } from "../shared/types/new-post/newPost";
import { axiosInstance } from "./axiosInstance";
export const getAllNews = async () => {
  const response = await axiosInstance.get<NewsPostPublicAPIResponse>("", {
    params: {
      apikey: "pub_37905255130db5777238d8fc27655d2437859",
      country: "au,us",
      image: 1,
    },
  });
  return response.data.results;
};
