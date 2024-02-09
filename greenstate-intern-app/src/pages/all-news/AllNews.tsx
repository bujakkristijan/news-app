import { useNewsState } from "../../store/useNewsState";
import { HeaderNewsList } from "../../components/all-news/HeaderNewsList";
import { StyledAllNewsContainer } from "./AllNews.styles";
export const AllNews = () => {
  const { allNewsPosts } = useNewsState();
  return (
    <StyledAllNewsContainer>
      <HeaderNewsList title="All news" newsPosts={newsPosts} />
    </StyledAllNewsContainer>
  );
};
