import { Headline } from "../headline/Headline";
import { NewsCard } from "../card/news-card/NewsCard";
import { formatDate } from "../../helper/format-date/formatDate";
import { StyledNewsMainContainer } from "./NewsList.styled";
import { NewsPostPublicAPI } from "../../shared/types/new-post/newPost";
import {
  StyledAllNewsContainer,
  StyledLatestNewsContainer,
} from "../../pages/home/Home.style";
type AllNewsProps = {
  title: string;
  newsPosts?: NewsPostPublicAPI[];
  container?: typeof StyledAllNewsContainer | typeof StyledLatestNewsContainer;
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
        {newsPosts?.map((post) => (
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
