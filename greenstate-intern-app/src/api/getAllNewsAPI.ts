import { NewsPostPublicAPIResponse } from "../shared/types/new-post/newPost";
import { axiosInstance } from "./axiosInstance";
export const getAllNews = async () => {
  const response = await axiosInstance.get<NewsPostPublicAPIResponse>("");
  return response.data.results;
};
