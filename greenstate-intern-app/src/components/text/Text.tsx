
import { TypographyFontSize, TypographyLineHeight, TypographyFontWeight, TypographyFontFamily, Color } from "../../shared/theme/theme"
import { StyledText } from "./Text.styles"

export type TextProps = {
  fontSize:TypographyFontSize;
  lineHeight: TypographyLineHeight;
  fontWeight: TypographyFontWeight;
  fontFamily: TypographyFontFamily;
  color?: Color;
  children: string; 
}

export const Text = ({ fontSize, lineHeight, fontWeight, fontFamily, color, children }: TextProps) => {

  const defaultColor = color || "black";

  return (
    <StyledText $fontSize={fontSize} $lineHeight = {lineHeight} $fontWeight = {fontWeight} $fontFamily={fontFamily} $color={defaultColor}>{children}</StyledText>
  )
}