import { NewsList } from "../../components/news-list/NewsList";
import { StyledAllNewsMainContainer } from "./AllNews.styles";
import { StyledAllNewsContainer } from "../home/Home.style";
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
    <StyledAllNewsMainContainer>
      <NewsList
        title="All news"
        newsPosts={allNewsPosts}
        container={StyledAllNewsContainer}
      />
    </StyledAllNewsMainContainer>
  );
};
