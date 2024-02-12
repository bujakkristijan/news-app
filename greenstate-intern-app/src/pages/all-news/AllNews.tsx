import { NewsList } from "../../components/news-list/NewsList";
import { StyledAllNewsMainContainer } from "./AllNews.styles";
import { StyledAllNewsContainer } from "../home/Home.style";
import { useQuery } from "react-query";
import { NewsPostPublicAPI } from "../../shared/types/new-post/newPost";
import { getAllNews } from "../../api/getAllNewsAPI";
import { PageStateContainer } from "../../components/page-state-container/PageStateContainer";
export const AllNews = () => {
  const allNewsQuery = useQuery<NewsPostPublicAPI[], Error>({
    queryKey: "allNews",
    queryFn: getAllNews,
    staleTime: 120000,
  });

  const {
    data: allNewsPosts,
    isLoading: allNewsLoading,
    isError: allNewsError,
  } = allNewsQuery;

  return (
    <PageStateContainer isLoading={allNewsLoading} isError={allNewsError}>
      <StyledAllNewsMainContainer>
        <NewsList
          title="All news"
          newsPosts={allNewsPosts || []}
          container={StyledAllNewsContainer}
        />
      </StyledAllNewsMainContainer>
    </PageStateContainer>
  );
};
