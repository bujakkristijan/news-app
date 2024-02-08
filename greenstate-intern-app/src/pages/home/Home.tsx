import { TrustCard } from "../../components/card/trust-card/TrustCard";
import { useNewsState } from "../../store/useNewsState";
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

export const Home = () => {
  const { newsPosts } = useNewsState();
  const navigate = useNavigate();

  const navigateToAllNews = () => {
    navigate("/all-news");
  };
  return (
    <StyledHomeContainer>
      <Banner
        title="The best news always available"
        description="On all devices, always on time"
      />
      <Headline isActive={true} title="Latest news" />
      <StyledLatestNewsContainer>
        {newsPosts.map((post) => (
          <NewsCard
            key={post.id}
            title={post.title}
            description={post.description}
            imageURL={post.url}
            date={post.date}
            isActive={post.date === formatDate(new Date().toString())}
          ></NewsCard>
        ))}
      </StyledLatestNewsContainer>
      <TrustCard
        title="News Recognized for Unparalleled Objectivity"
        description="Our News has been acknowledged for its unparalleled commitment to objectivity, standing out in an era where unbiased reporting is increasingly valued"
      ></TrustCard>
      <AllNews title="All news" newsPosts={newsPosts} />
      <ButtonWrapper>
        <Button size="xlg" onClick={navigateToAllNews}>
          View all news
        </Button>
      </ButtonWrapper>
    </StyledHomeContainer>
  );
};
