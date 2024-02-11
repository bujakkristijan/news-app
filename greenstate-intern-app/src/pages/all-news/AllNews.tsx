import { NewsList } from "../../components/news-list/NewsList";
import { StyledAllNewsContainer } from "./AllNews.styles";
import { useQuery } from "react-query";
import { NewsPostPublicAPI } from "../../shared/types/new-post/newPost";
import { getAllNews } from "../../services/getAllNewsAPI";
import { LoadingSpinner } from "../../components/loading-spinner/LoadingSpinner";
import { ErrorFetch } from "../error-fetch/ErrorFetch";
export const AllNews = () => {
  const {
    data: allNewsPosts,
    isLoading: allNewsLoading,
    isError: allNewsError,
  } = useQuery<NewsPostPublicAPI[], Error>("allNews", getAllNews);

  if (allNewsLoading) return <LoadingSpinner />;
  if (allNewsError) return <ErrorFetch />;
  return (
    <StyledAllNewsContainer>
      <NewsList title="All news" newsPosts={allNewsPosts} />
    </StyledAllNewsContainer>
  );
};
