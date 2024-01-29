import { Card } from "../Card";
import { Text } from "../../text/Text";
import { CircleIcon } from "../../circle-icon/CircleIcon";
import { StyledTrustCard } from "./TrustCard.styles";
import { StyledTextContainer } from "./TrustCard.styles";

type TrustCardProps = {
  title: string;
  description: string;
};

export const TrustCard = ({ title, description }: TrustCardProps) => {
  return (
    <Card $bgColor="lighterGreen" $borderColor="green" $width="100%">
      <StyledTrustCard>
        <CircleIcon status="success"></CircleIcon>
        <StyledTextContainer>
          <Text
            fontSize="md"
            fontWeight="extraBold"
            lineHeight="md"
            fontFamily="inter"
            color="lightBlack"
          >
            {title}
          </Text>
          <Text
            fontSize="sm"
            fontWeight="regular"
            lineHeight="sm"
            fontFamily="inter"
            color="greyDesc"
          >
            {description}
          </Text>
        </StyledTextContainer>
      </StyledTrustCard>
    </Card>
  );
};
