
import { TypographyFontSizeBody, TypographyLineHeightBody, TypographyFontWeight } from "../../shared/theme/theme"
import { StyledText } from "./Text.styles"

type TextProps = {
  fontSize:TypographyFontSizeBody;
  lineHeight: TypographyLineHeightBody;
  fontWeight: TypographyFontWeight;
  children: React.ReactNode; 
}

export const Text = ({ fontSize, lineHeight, fontWeight, children }: TextProps) => {
  return (
    <StyledText fontSize={fontSize} lineHeight = {lineHeight} fontWeight = {fontWeight}>{children}</StyledText>
  )
}
