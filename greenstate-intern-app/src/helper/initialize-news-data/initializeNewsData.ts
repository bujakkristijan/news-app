import { fetchNewsFromApi } from "../../services/fetchNews";
import { useNewsState } from "../../store/useNewsState";

const isInitFLAG = "newsDataInitialized";

export const initializeNewsData = async () => {
  try {
    const isInitialized = localStorage.getItem(isInitFLAG);
    if (isInitialized !== "true") {
      const data = await fetchNewsFromApi();
      useNewsState.setState({ newsPosts: data.newsPosts });
      localStorage.setItem(isInitFLAG, "true");
    }
  } catch (error) {
    console.log(error);
  }
};
