import styled from "styled-components";
import { TypographyFontSizeBody } from "../../shared/theme/theme";
import { TypographyFontWeight } from "../../shared/theme/theme";
import { TypographyLineHeightBody } from "../../shared/theme/theme";

export const StyledText = styled.p<{
    fontSize: TypographyFontSizeBody;
    fontWeight: TypographyFontWeight;
    lineHeight: TypographyLineHeightBody;
  }>`
    font-size: ${({theme, fontSize}) => theme.typography.fontSizeBody[fontSize]};
    font-weight: ${({theme, fontWeight}) => theme.typography.fontWeight[fontWeight]};
    line-height: ${({theme, lineHeight}) => theme.typography.lineHeightBody[lineHeight]};
`