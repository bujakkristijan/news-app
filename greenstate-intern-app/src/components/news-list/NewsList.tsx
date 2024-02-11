import { Headline } from "../headline/Headline";
import { NewsCard } from "../card/news-card/NewsCard";
import { formatDate } from "../../helper/format-date/formatDate";
import { StyledAllNewsContainer } from "./NewsList.styled";
import { StyledAllNewsMainContainer } from "./NewsList.styled";
import { NewsPostPublicAPI } from "../../shared/types/new-post/newPost";

type AllNewsProps = {
  title: string;
  newsPosts?: NewsPostPublicAPI[];
};

export const NewsList = ({ title, newsPosts }: AllNewsProps) => {
  return (
    <StyledAllNewsMainContainer>
      <Headline title={title} />
      <StyledAllNewsContainer>
        {newsPosts?.map((post) => (
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
