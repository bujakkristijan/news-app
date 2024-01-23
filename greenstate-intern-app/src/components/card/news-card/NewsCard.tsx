import styled from "styled-components";
import { StyledNewsCard } from "./NewsCard.styles";
import NewsImage from "../../../assets/images/news-image.png";
import { Chip } from "../../chip/Chip";
import { StyledText } from "../../text/Text.styles";

interface NewsCardProps {
  title: string;
  description: string;
}

const StyledNewsCardTitle = styled(StyledText)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const StyledNewsCardDescription = styled(StyledText)`
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

export const NewsCard = ({ title, description }: NewsCardProps) => {
  return (
    <StyledNewsCard>
      <div className="chip-container">
        <Chip isActive={true}>23/12/2023</Chip>
      </div>
      <img className="card-image" src={NewsImage} alt=""></img>
      <StyledNewsCardTitle
        $fontSize="lg"
        $fontWeight={"bold"}
        $lineHeight="lg"
        $fontFamily="inter"
        $color="lightBlack"
      >
        {title}
      </StyledNewsCardTitle>
      <StyledNewsCardDescription
        $fontSize="md"
        $fontWeight={"regular"}
        $lineHeight="md"
        $fontFamily="inter"
        $color="greyDesc"
      >
        {description}
      </StyledNewsCardDescription>
    </StyledNewsCard>
  );
};
