import { StyledNewsCard } from "./NewsCard.styles";
import NewsImage from "../../../assets/images/news-image.png";
import { Chip } from "../../chip/Chip";
import { Card } from "../Card";
import {
  StyledChipContainer,
  StyledNewsCardDescription,
  StyledCardImage,
  StyledNewsCardTitle,
} from "./NewsCardProps.styles";

type NewsCardProps = {
  title: string;
  description: string;
  imageURL?: string;
};

export const NewsCard = ({
  title,
  description,
  imageURL = NewsImage,
}: NewsCardProps) => {
  return (
    <Card>
      <StyledNewsCard>
        <StyledChipContainer>
          <Chip isActive={true}>23/12/2023</Chip>
        </StyledChipContainer>
        <StyledCardImage src={imageURL} alt="" />
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
