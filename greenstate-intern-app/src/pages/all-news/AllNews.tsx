import { useNewsState } from "../../store/useNewsState";
import { AllNews as AllNewsComponent } from "../../components/all-news/AllNews";
import { StyledAllNewsContainer } from "./AllNews.styles";
export const AllNews = () => {
  const { newsPosts } = useNewsState();
  return (
    <StyledAllNewsContainer>
      <AllNewsComponent title="All news" newsPosts={newsPosts} />
    </StyledAllNewsContainer>
  );
};
