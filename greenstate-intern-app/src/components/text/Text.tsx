
import { TypographyFontSize, TypographyLineHeight, TypographyFontWeight, TypographyFontFamily, Color } from "../../shared/theme/theme"
import { StyledText } from "./Text.styles"

type TextProps = {
  fontSize:TypographyFontSize;
  lineHeight: TypographyLineHeight;
  fontWeight: TypographyFontWeight;
  fontFamily: TypographyFontFamily;
  color: Color;
  children: string | React.ReactNode; 
}

export const Text = ({ fontSize, lineHeight, fontWeight, fontFamily, color, children }: TextProps) => {
  return (
    <StyledText $fontSize={fontSize} $lineHeight = {lineHeight} $fontWeight = {fontWeight} $fontFamily={fontFamily} $color={color}>{children}</StyledText>
  )
}
