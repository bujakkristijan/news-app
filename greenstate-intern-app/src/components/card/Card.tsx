import { StyledCard } from "./Card.styles";
import { Padding } from "../../shared/types/padding";
import {
  TypographyBorderWidth,
  TypographyBorderRadius,
  Color,
} from "../../shared/theme/theme";
type CardProps = {
  children: React.ReactNode;
  borderwidth?: TypographyBorderWidth;
  borderRadius?: TypographyBorderRadius;
  bgColor?: Color;
  padding?: Padding;
  borderColor?: Color;
  width?: string;
};

export const Card = ({
  children,
  borderwidth = "sm",
  borderRadius = "md",
  bgColor = "white",
  padding = "1rem",
  borderColor = "lightestGrey",
  width = "fit-content",
}: CardProps) => {
  return (
    <StyledCard
      $borderWidth={borderwidth}
      $borderRadius={borderRadius}
      $bgColor={bgColor}
      $padding={padding}
      $borderColor={borderColor}
      $width={width}
    >
      {children}
    </StyledCard>
  );
};
