import { NewsList } from "../../components/news-list/NewsList";
import { StyledAllNewsMainContainer } from "./AllNews.styles";
import { StyledAllNewsContainer } from "../home/Home.style";
import { useQuery } from "react-query";
import { axiosInstance } from "../../api/instance/axiosInstance";
import { NewsPostResponse } from "../../api/responses/newsPost";
import { PageStateContainer } from "../../components/page-state-container/PageStateContainer";
import { useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import { QueryKeys } from "../../enums/query-keys/queryKeys";
import { AxiosResponse } from "axios";
export const AllNews = () => {
  const navigate = useNavigate();

  const onGoBackClick = () => {
    navigate(routes.root);
  };

  const {
    data: allNewsPosts,
    isLoading: allNewsLoading,
    isError: allNewsError,
  } = useQuery<AxiosResponse<NewsPostResponse>>({
    queryKey: QueryKeys.ALL_NEWS,
    queryFn: () => axiosInstance.get(""),
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
          newsPosts={allNewsPosts?.data.results || []}
          container={StyledAllNewsContainer}
        />
      </StyledAllNewsMainContainer>
    </PageStateContainer>
  );
};
