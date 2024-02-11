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
  isActiveHeadline?: boolean;
  isActiveChip?: boolean;
};

export const NewsList = ({
  title,
  newsPosts,
  container: Container = StyledAllNewsContainer,
  isActiveHeadline,
  isActiveChip,
}: AllNewsProps) => {
  return (
    <StyledNewsMainContainer>
      <Headline title={title} isActive={isActiveHeadline} />
      <Container>
        {newsPosts?.map((post) => (
          <NewsCard
            key={post.article_id}
            title={post.title}
            description={post.description}
            imageURL={post.image_url}
            date={formatDate(post.pubDate)}
            isActive={isActiveChip}
          ></NewsCard>
        ))}
      </Container>
    </StyledNewsMainContainer>
  );
};
