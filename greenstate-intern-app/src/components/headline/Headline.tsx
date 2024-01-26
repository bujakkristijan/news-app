import { Text } from "../text/Text";
import { StyledHeadline, StyledLine } from "./Headline.styles";
type HeadlineProps = {
  title: string;
  isActive?: boolean;
};

export const Headline = ({ title, isActive = false }: HeadlineProps) => {
  return (
    <StyledHeadline>
      <Text
        lineHeight="lg"
        color="lighterBlack"
        fontSize="lg"
        fontWeight="extraBold"
      >
        {title}
      </Text>
      {isActive && <StyledLine />}
    </StyledHeadline>
  );
};
