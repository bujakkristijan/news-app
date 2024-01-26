import {
  TypographyFontSize,
  TypographyLineHeight,
  TypographyFontWeight,
  TypographyFontFamily,
  Color,
} from "../../shared/theme/theme";
import { StyledText } from "./Text.styles";

export type TextProps = {
  fontSize?: TypographyFontSize;
  lineHeight?: TypographyLineHeight;
  fontWeight?: TypographyFontWeight;
  fontFamily?: TypographyFontFamily;
  color?: Color;
  children: string;
  noWrap?: boolean;
};

export const Text = ({
  fontSize = "md",
  lineHeight = "lg",
  fontWeight = "regular",
  fontFamily = "inter",
  color = "black",
  children,
  noWrap = false,
}: TextProps) => {
  return (
    <StyledText
      $fontSize={fontSize}
      $lineHeight={lineHeight}
      $fontWeight={fontWeight}
      $fontFamily={fontFamily}
      $color={color}
      $noWrap={noWrap}
    >
      {children}
    </StyledText>
  );
};
