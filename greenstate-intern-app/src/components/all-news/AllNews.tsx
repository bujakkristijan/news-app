import { Headline } from "../../components/headline/Headline";
import { NewsCard } from "../../components/card/news-card/NewsCard";
import { formatDate } from "../../helper/format-date/formatDate";
import { StyledAllNewsContainer } from "./AllNews.styled";
import { StyledAllNewsMainContainer } from "./AllNews.styled";
import { NewPostDataWithDate } from "../../shared/types/new-post/newPost";

type AllNewsProps = {
  title: string;
  newsPosts: NewPostDataWithDate[];
};

export const AllNews = ({ title, newsPosts }: AllNewsProps) => {
  return (
    <StyledAllNewsMainContainer>
      <Headline title={title} />
      <StyledAllNewsContainer>
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
      </StyledAllNewsContainer>
    </StyledAllNewsMainContainer>
  );
};
