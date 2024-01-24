import { StyledNewsCard } from "./NewsCard.styles";
import { Chip } from "../../chip/Chip";
import { Card } from "../Card";
import {
  StyledChipContainer,
  StyledNewsCardDescription,
  StyledCardImage,
  StyledNewsCardTitle,
} from "./NewsCard.styles";

type NewsCardProps = {
  title: string;
  description: string;
  imageURL: string;
  isActive?: boolean;
};

export const NewsCard = ({
  title,
  description,
  imageURL,
  isActive,
}: NewsCardProps) => {
  return (
    <Card>
      <StyledNewsCard>
        <StyledChipContainer>
          <Chip isActive={isActive}>23/12/2023</Chip>
        </StyledChipContainer>
        <StyledCardImage src={imageURL} />
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
