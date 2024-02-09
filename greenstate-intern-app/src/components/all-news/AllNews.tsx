import { Headline } from "../../components/headline/Headline";
import { NewsCard } from "../../components/card/news-card/NewsCard";
import { formatDate } from "../../helper/format-date/formatDate";
import { StyledAllNewsContainer } from "./AllNews.styled";
import { StyledAllNewsMainContainer } from "./AllNews.styled";
import { NewsPostPublicAPI } from "../../store/useNewsState";

type AllNewsProps = {
  title: string;
  newsPosts: NewsPostPublicAPI[];
};

export const AllNews = ({ title, newsPosts }: AllNewsProps) => {
  return (
    <StyledAllNewsMainContainer>
      <Headline title={title} />
      <StyledAllNewsContainer>
        {newsPosts.map((post) => (
          <NewsCard
            key={post.article_id}
            title={post.title}
            description={post.description}
            imageURL={post.image_url}
            date={formatDate(post.pubDate)}
            isActive={false}
          ></NewsCard>
        ))}
      </StyledAllNewsContainer>
    </StyledAllNewsMainContainer>
  );
};
