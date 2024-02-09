import { NewsPostPublicAPI } from "../../store/useNewsState";

export const sortNewsByDate = (clonedNewsPosts: NewsPostPublicAPI[]) => {
  // Sort the cloned array by date in descending order
  return clonedNewsPosts.sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
  );
};
