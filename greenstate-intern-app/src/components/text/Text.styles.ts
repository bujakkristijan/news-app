import styled from "styled-components";
// import { TypographySizes } from "../../shared/theme/theme";
import { TypographyFontSizeHeading } from "../../shared/theme/theme";
import { TypographyFontWeight } from "../../shared/theme/theme";
import { TypographyLineHeightHeading } from "../../shared/theme/theme";

export const StyledText = styled.p<{
    fontSize: TypographyFontSizeHeading;
    fontWeight: TypographyFontWeight;
    lineHeight: TypographyLineHeightHeading;
  }>`
    font-size: ${({theme, fontSize}) => theme.typography.fontSizeHeading[fontSize]};
    font-weight: ${({theme, fontWeight}) => theme.typography.fontWeight[fontWeight]};
    line-height: ${({theme, lineHeight}) => theme.typography.lineHeightHeading[lineHeight]};
`