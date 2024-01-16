import styled from "styled-components";
import { TypographyHeadingType, TypographyFontWeight, TypographyFontFamily } from "../../shared/theme/theme";

export const StyledHeading = styled.p.attrs<{
  headingType: TypographyHeadingType,
  fontWeight: TypographyFontWeight,
  fontFamily: TypographyFontFamily;
}>(({headingType}) =>({
    as: headingType,
}))`
  font-size: ${({ theme, headingType }) => theme.typography.headingType[headingType].fontSize};
  font-weight: ${({ theme, fontWeight }) => theme.typography.fontWeight[fontWeight]};
  font-family: ${({ theme, fontFamily }) => theme.typography.fontFamily[fontFamily]};
  line-height: ${({ theme, headingType }) => theme.typography.headingType[headingType].lineHeight};
`;
