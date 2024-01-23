import styled from "styled-components";
import {
  TypographyHeadingType,
  TypographyFontWeight,
  TypographyFontFamily,
  Color,
} from "../../shared/theme/theme";

export const StyledHeading = styled.p.attrs<{
  $headingType: TypographyHeadingType;
  $fontWeight: TypographyFontWeight;
  $fontFamily: TypographyFontFamily;
  $color: Color;
}>(({ $headingType }) => ({
  as: $headingType,
}))`
  font-size: ${({ theme, $headingType }) =>
    theme.typography.headingType[$headingType].fontSize};
  font-weight: ${({ theme, $fontWeight }) =>
    theme.typography.fontWeight[$fontWeight]};
  font-family: ${({ theme, $fontFamily }) =>
    theme.typography.fontFamily[$fontFamily]};
  line-height: ${({ theme, $headingType }) =>
    theme.typography.headingType[$headingType].lineHeight};
  color: ${({ theme, $color }) => theme.colors[$color]};
`;
