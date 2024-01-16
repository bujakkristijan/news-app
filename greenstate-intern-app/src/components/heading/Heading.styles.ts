import styled from "styled-components";
import { TypographyHeadingType, TypographyFontWeight } from "../../shared/theme/theme";

export const StyledHeading = styled.h1<{
  headingType: TypographyHeadingType;
  fontWeight: TypographyFontWeight;
}>`
  font-size: ${({ theme, headingType }) => theme.typography.headingType[headingType].fontSize};
  font-weight: ${({ theme, fontWeight }) => theme.typography.fontWeight[fontWeight]};
  line-height: ${({ theme, headingType }) => theme.typography.headingType[headingType].lineHeight};
`;
