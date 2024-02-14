import { TrustCard } from "../../components/card/trust-card/TrustCard";
import {
  StyledLatestNewsContainer,
  StyledHomeContainer,
  ButtonWrapper,
  StyledAllNewsContainer,
} from "./Home.style";
import { Banner } from "../../components/banner/Banner";
import { Button } from "../../components/button/Button";
import { useNavigate } from "react-router-dom";
import { NewsList } from "../../components/news-list/NewsList";
import { useQuery } from "react-query";
import { routes } from "../../router/routes";
import { PageStateContainer } from "../../components/page-state-container/PageStateContainer";
import { QueryKeys } from "../../enums/query-keys/queryKeys";
import { axiosInstance } from "../../api/instance/axiosInstance";
import { AxiosResponse } from "axios";
import { NewsPostResponse } from "../../api/responses/newsPost";
export const Home = () => {
  const navigate = useNavigate();

  const onAllNewsClick = () => {
    navigate(routes.allNews);
    window.scrollTo(0, 0);
  };

  const onGoBackClick = () => {
    navigate(routes.root);
  };

  const {
    data: latestNewsPosts,
    isLoading: latestNewsLoading,
    isError: latestNewsError,
  } = useQuery<AxiosResponse<NewsPostResponse>>({
    queryKey: QueryKeys.LATEST_NEWS,
    queryFn: () =>
      axiosInstance.get("", {
        params: {
          size: 5,
        },
      }),
  });

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
      isLoading={allNewsLoading || latestNewsLoading}
      isError={allNewsError || latestNewsError}
      onClick={onGoBackClick}
      title="Something went wrong!"
      description="An error occurred while attempting to retrieve data from the server."
    >
      <StyledHomeContainer>
        <Banner
          title="The best news always available"
          description="On all devices, always on time"
        />
        <NewsList
          title="Latest news"
          isActive={true}
          newsPosts={latestNewsPosts?.data.results || []}
          container={StyledLatestNewsContainer}
        />
        <TrustCard
          title="News Recognized for Unparalleled Objectivity"
          description="Our News has been acknowledged for its unparalleled commitment to objectivity, standing out in an era where unbiased reporting is increasingly valued"
        />
        <NewsList
          title="All news"
          newsPosts={allNewsPosts?.data.results || []}
          container={StyledAllNewsContainer}
        />
        <ButtonWrapper>
          <Button size="xlg" onClick={onAllNewsClick}>
            View all news
          </Button>
        </ButtonWrapper>
      </StyledHomeContainer>
    </PageStateContainer>
  );
};
