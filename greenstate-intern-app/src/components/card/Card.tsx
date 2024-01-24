import { StyledCard } from "./Card.styles";
import { CardContainer } from "./Card.styles";
import { PaddingValue } from "../../shared/types/padding-value";
import {
  TypographyBorderWidth,
  TypographyBorderRadius,
  Color,
} from "../../shared/theme/theme";
type CardProps = {
  children: React.ReactNode;
  $borderwidth?: TypographyBorderWidth;
  $borderRadius?: TypographyBorderRadius;
  $bgColor?: Color;
  $padding?: PaddingValue;
  $borderColor?: Color;
};

export const Card = ({
  children,
  $borderwidth = "sm",
  $borderRadius = "md",
  $bgColor = "white",
  $padding = "1rem",
  $borderColor = "lightestGrey",
}: CardProps) => {
  return (
    <StyledCard
      $borderWidth={$borderwidth}
      $borderRadius={$borderRadius}
      $bgColor={$bgColor}
      $borderColor={$borderColor}
    >
      <CardContainer $padding={$padding}>{children}</CardContainer>
    </StyledCard>
  );
};
