import { TrustCard } from "../../components/card/trust-card/TrustCard";
import { StyledLatestNewsContainer } from "./Home.style";
import { Headline } from "../../components/headline/Headline";
import { NewsCard } from "../../components/card/news-card/NewsCard";
import { formatDate } from "../../helper/format-date/formatDate";
import { StyledHomeContainer } from "./Home.style";
import { Banner } from "../../components/banner/Banner";
import { Button } from "../../components/button/Button";
import { ButtonWrapper } from "./Home.style";
import { useNavigate } from "react-router-dom";
import { AllNews } from "../../components/all-news/AllNews";
import { useQuery } from "react-query";
import { getLatestNews } from "../../services/getLatestNewsAPI";
import { getAllNews } from "../../services/getAllNewsAPI";
import { NewsPostPublicAPI } from "../../shared/types/new-post/newPost";

export const Home = () => {
  const navigate = useNavigate();

  const onAllNewsClick = () => {
    navigate("/all-news");
    window.scrollTo(0, 0);
  };

  const {
    data: latestNewsPosts,
    isLoading: latestNewsLoading,
    isError: latestNewsError,
  } = useQuery<NewsPostPublicAPI[], Error>("latestNews", getLatestNews);

  const {
    data: allNewsPosts,
    isLoading: allNewsLoading,
    isError: allNewsError,
  } = useQuery<NewsPostPublicAPI[], Error>("allNews", getAllNews);

  if (latestNewsLoading || allNewsLoading) return <div>Loading...</div>;
  if (latestNewsError || allNewsError) return <div>Error fetching news...</div>;

  return (
    <StyledHomeContainer>
      <Banner
        title="The best news always available"
        description="On all devices, always on time"
      />
      <Headline isActive={true} title="Latest news" />
      <StyledLatestNewsContainer>
        {latestNewsPosts.map((post) => (
          <NewsCard
            key={post.article_id}
            title={post.title}
            description={post.description}
            imageURL={post.image_url}
            date={formatDate(post.pubDate)}
            isActive={true}
          ></NewsCard>
        ))}
      </StyledLatestNewsContainer>
      <TrustCard
        title="News Recognized for Unparalleled Objectivity"
        description="Our News has been acknowledged for its unparalleled commitment to objectivity, standing out in an era where unbiased reporting is increasingly valued"
      ></TrustCard>
      <HeaderNewsList title="All news" newsPosts={newsPosts} />
      <ButtonWrapper>
        <Button size="xlg" onClick={onAllNewsClick}>
          View all news
        </Button>
      </ButtonWrapper>
    </StyledHomeContainer>
  );
};
