import { NewsList } from "../../components/news-list/NewsList";
import { StyledAllNewsMainContainer } from "./AllNews.styles";
import { StyledAllNewsContainer } from "../home/Home.style";
import { useQuery } from "react-query";
import { axiosInstance } from "../../api/axiosInstance";
import {
  NewsPostPublicAPI,
  NewsPostPublicAPIResponse,
} from "../../api/responses/newsPost";
import { PageStateContainer } from "../../components/page-state-container/PageStateContainer";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import { QueryKeys } from "../../enums/query-keys/queryKeys";
export const AllNews = () => {
  const navigate = useNavigate();

  const onGoBackClick = () => {
    navigate(routes.root);
    window.scrollTo(0, 0);
  };

  const {
    data: allNewsPosts,
    isLoading: allNewsLoading,
    isError: allNewsError,
  } = useQuery<NewsPostPublicAPI[], Error>({
    queryKey: QueryKeys.ALL_NEWS,
    queryFn: async () => {
      const response = await axiosInstance.get<NewsPostPublicAPIResponse>("");
      return response.data.results;
    },
  });

  return (
    <PageStateContainer
      isLoading={allNewsLoading}
      isError={allNewsError}
      onClick={onGoBackClick}
      title="Something went wrong!"
      description="An error occurred while attempting to retrieve data from the server."
    >
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
