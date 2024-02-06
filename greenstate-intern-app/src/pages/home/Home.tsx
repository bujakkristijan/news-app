import { TrustCard } from "../../components/card/trust-card/TrustCard";
import { useNewsStore } from "../../store/NewsPostStore";
import { NewsState } from "../../store/NewsPostStore";
import { StyledLatestNewsContainer } from "./Home.style";
import { Headline } from "../../components/headline/Headline";
import { NewsCard } from "../../components/card/news-card/NewsCard";
import { convertDateFormat } from "../../helper/date-formatter/dateFormatter";
import { StyledHomeContainer } from "./Home.style";
import { StyledLatestNewsCard } from "./Home.style";

export const Home = () => {
  const { newsPosts } = useNewsStore() as NewsState;
  return (
    <StyledHomeContainer>
      <Headline isActive={true} title="Latest news" />
      <StyledLatestNewsContainer>
        {newsPosts.map((post, index) => (
          <StyledLatestNewsCard key={index}>
            <NewsCard
              title={post.title}
              description={post.description}
              imageURL={post.url}
              date={post.date}
              isActive={post.date === convertDateFormat(new Date().toString())}
            ></NewsCard>
          </StyledLatestNewsCard>
        ))}
      </StyledLatestNewsContainer>
      <TrustCard
        title="News Recognized for Unparalleled Objectivity"
        description="Our News has been acknowledged for its unparalleled commitment to objectivity, standing out in an era where unbiased reporting is increasingly valued"
      ></TrustCard>
    </StyledHomeContainer>
  );
};
