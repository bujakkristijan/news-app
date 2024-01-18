
import { TypographyFontSize, TypographyLineHeight, TypographyFontWeight, TypographyFontFamily } from "../../shared/theme/theme"
import { StyledText } from "./Text.styles"

type TextProps = {
  fontSize:TypographyFontSize;
  lineHeight: TypographyLineHeight;
  fontWeight: TypographyFontWeight;
  fontFamily: TypographyFontFamily;
  children: string | React.ReactNode; 
}

export const Text = ({ fontSize, lineHeight, fontWeight, fontFamily, children }: TextProps) => {
  return (
    <StyledText $fontSize={fontSize} $lineHeight = {lineHeight} $fontWeight = {fontWeight} $fontFamily={fontFamily}>{children}</StyledText>
  )
}
