import { Headline } from "../headline/Headline";
import { NewsCard } from "../card/news-card/NewsCard";
import { formatDate } from "../../helper/format-date/formatDate";
import { StyledNewsMainContainer } from "./NewsList.styled";
import { NewsPost } from "../../api/responses/newsPost";
import { StyledAllNewsContainer } from "./NewsList.styled";
import { ContainerType } from "../../shared/types/container/container";
type AllNewsProps = {
  title: string;
  newsPosts: NewsPost[];
  container?: ContainerType;
  isActive?: boolean;
};

export const NewsList = ({
  title,
  newsPosts,
  container: Container = StyledAllNewsContainer,
  isActive,
}: AllNewsProps) => {
  return (
    <StyledNewsMainContainer>
      <Headline title={title} isActive={isActive} />
      <Container>
        {newsPosts.map((post) => (
          <NewsCard
            key={post.article_id}
            title={post.title}
            description={post.description}
            imageURL={post.image_url}
            date={formatDate(post.pubDate)}
            isActive={isActive}
          ></NewsCard>
        ))}
      </Container>
    </StyledNewsMainContainer>
  );
};
