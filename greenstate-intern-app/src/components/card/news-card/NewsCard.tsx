import { StyledNewsCard } from "./NewsCard.styles";
import NewsImage from "../../../assets/images/news-image.png";
import { Chip } from "../../chip/Chip";
import { StyledCardImage } from "./CardImage.styles";
import { Card } from "../Card";
import { StyledChipContainer } from "./ChipContainer.styles";
import { StyledNewsCardTitle } from "./NewsCardTitle.styles";
import { StyledNewsCardDescription } from "./NewsCardDescription";

interface NewsCardProps {
  title: string;
  description: string;
}

export const NewsCard = ({ title, description }: NewsCardProps) => {
  return (
    <Card>
      <StyledNewsCard>
        <StyledChipContainer>
          <Chip isActive={true}>23/12/2023</Chip>
        </StyledChipContainer>
        <StyledCardImage src={NewsImage} alt=""></StyledCardImage>
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
    </Card>
  );
};
