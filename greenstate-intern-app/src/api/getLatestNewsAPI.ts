import { NewsPostPublicAPIResponse } from "../shared/types/new-post/newPost";
import { axiosInstance } from "./axiosInstance";
export const getLatestNews = async () => {
  const response = await axiosInstance.get<NewsPostPublicAPIResponse>("", {
    params: {
      size: 5,
    },
  });
  return response.data.results;
};
