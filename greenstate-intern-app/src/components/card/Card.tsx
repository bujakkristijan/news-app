import { StyledCard } from "./Card.styles";
import { PaddingValue } from "../../shared/theme/padding-value";
import {
  TypographyBorderWidth,
  TypographyBorderRadius,
  Color,
} from "../../shared/theme/theme";
interface CardProps {
  children: React.ReactNode;
  borderWidth?: TypographyBorderWidth;
  borderRadius?: TypographyBorderRadius;
  bgColor?: Color;
  padding?: PaddingValue;
  borderColor?: Color;
}
export const Card = ({
  children,
  borderWidth = "sm",
  borderRadius = "md",
  bgColor = "white",
  padding = "1rem",
  borderColor = "lightestGrey",
}: CardProps) => {
  return (
    <StyledCard
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      bgColor={bgColor}
      padding={padding}
      borderColor={borderColor}
    >
      {children}
    </StyledCard>
  );
};
