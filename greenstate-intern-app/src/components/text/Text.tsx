
import { TypographyFontSizeBody, TypographyLineHeightBody, TypographyFontWeight } from "../../shared/theme/theme"
import { StyledText } from "./Text.styles"

type TextProps = {
  fontSize:TypographyFontSizeBody;
  lineHeight: TypographyLineHeightBody;
  fontWeight: TypographyFontWeight;
}

export const Text = ({ fontSize, lineHeight, fontWeight }: TextProps) => {
  return (
    <StyledText fontSize={fontSize} lineHeight = {lineHeight} fontWeight = {fontWeight}>Text</StyledText>
  )
}
