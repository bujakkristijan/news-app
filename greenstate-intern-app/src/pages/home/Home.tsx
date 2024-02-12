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
import { getLatestNews } from "../../api/getLatestNewsAPI";
import { getAllNews } from "../../api/getAllNewsAPI";
import { NewsPostPublicAPI } from "../../shared/types/new-post/newPost";
import { routes } from "../../router/routes";
import { PageStateContainer } from "../../components/page-state-container/PageStateContainer";
import { QueryKeys } from "../../shared/types/query-keys/queryKeys";

export const Home = () => {
  const navigate = useNavigate();

  const onAllNewsClick = () => {
    navigate(routes.allNews);
    window.scrollTo(0, 0);
  };

  const latestNewsQuery = useQuery<NewsPostPublicAPI[], Error>({
    queryKey: QueryKeys.LatestNews,
    queryFn: getLatestNews,
  });

  const allNewsQuery = useQuery<NewsPostPublicAPI[], Error>({
    queryKey: QueryKeys.AllNews,
    queryFn: getAllNews,
  });

  const {
    data: latestNewsPosts,
    isLoading: latestNewsLoading,
    isError: latestNewsError,
  } = latestNewsQuery;

  const {
    data: allNewsPosts,
    isLoading: allNewsLoading,
    isError: allNewsError,
  } = allNewsQuery;

  return (
    <PageStateContainer
      isLoading={allNewsLoading || latestNewsLoading}
      isError={allNewsError || latestNewsError}
    >
      <StyledHomeContainer>
        <Banner
          title="The best news always available"
          description="On all devices, always on time"
        />
        <NewsList
          title="Latest news"
          isActive={true}
          newsPosts={latestNewsPosts || []}
          container={StyledLatestNewsContainer}
        />
        <TrustCard
          title="News Recognized for Unparalleled Objectivity"
          description="Our News has been acknowledged for its unparalleled commitment to objectivity, standing out in an era where unbiased reporting is increasingly valued"
        />
        <NewsList
          title="All news"
          newsPosts={allNewsPosts || []}
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
