// import { useNewsState } from "../../store/useNewsState";

// const isInitFLAG = "newsDataInitialized";

// export const initializeNewsData = async () => {
//   try {
//     const isInitialized = localStorage.getItem(isInitFLAG);
//     if (isInitialized !== "true") {
//       const dataAllNews = await fetchAllNewsAPI();
//       const dataLatestNews = await fetchLatestNewsAPI();
//       useNewsState.setState({ allNewsPosts: dataAllNews });
//       useNewsState.setState({ latestNewsPosts: dataLatestNews });
//       localStorage.setItem(isInitFLAG, "true");
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };
