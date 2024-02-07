import { TrustCard } from "../../components/card/trust-card/TrustCard";
import { useNewsState } from "../../store/useNewsState";
import { StyledLatestNewsContainer } from "./Home.style";
import { Headline } from "../../components/headline/Headline";
import { NewsCard } from "../../components/card/news-card/NewsCard";
import { convertDateFormat } from "../../helper/date-formatter/dateFormatter";
import { StyledHomeContainer } from "./Home.style";

export const Home = () => {
  const { newsPosts } = useNewsState();
  return (
    <StyledHomeContainer>
      <Headline isActive={true} title="Latest news" />
      <StyledLatestNewsContainer>
        {newsPosts.map((post) => (
          <NewsCard
            key={post.id}
            title={post.title}
            description={post.description}
            imageURL={post.url}
            date={post.date}
            isActive={post.date === convertDateFormat(new Date().toString())}
          ></NewsCard>
        ))}
      </StyledLatestNewsContainer>
      <TrustCard
        title="News Recognized for Unparalleled Objectivity"
        description="Our News has been acknowledged for its unparalleled commitment to objectivity, standing out in an era where unbiased reporting is increasingly valued"
      ></TrustCard>
    </StyledHomeContainer>
  );
};
