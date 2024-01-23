import { StyledCard } from "./Card.styles";
import {
  TypographyBorder,
  TypographyBorderRadius,
  Color,
  TypographyPadding,
  TypographyGap,
} from "../../shared/theme/theme";
interface CardProps {
  children: React.ReactNode;
  border?: TypographyBorder;
  borderRadius?: TypographyBorderRadius;
  bgColor?: Color;
  padding?: TypographyPadding;
  gap?: TypographyGap;
  borderColor?: Color;
}
export const Card = ({
  children,
  border = "sm",
  borderRadius = "md",
  bgColor = "white",
  padding = "sm",
  gap = "sm",
  borderColor = "lightestGrey",
}: CardProps) => {
  return (
    <StyledCard
      border={border}
      borderRadius={borderRadius}
      bgColor={bgColor}
      padding={padding}
      gap={gap}
      borderColor={borderColor}
    >
      {children}
    </StyledCard>
  );
};
