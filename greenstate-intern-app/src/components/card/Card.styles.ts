import styled from "styled-components";
import {
  TypographyBorderRadius,
  TypographyBorderWidth,
} from "../../shared/theme/theme";
import { PaddingValue } from "../../shared/theme/padding-value";
import { Color } from "../../shared/theme/theme";
export const StyledCard = styled.div<{
  borderWidth: TypographyBorderWidth;
  borderRadius: TypographyBorderRadius;
  bgColor: Color;
  padding: PaddingValue;
  borderColor: Color;
}>`
  width: 300px;
  padding: ${({ padding }) => padding};
  border-radius: ${({ theme, borderRadius }) =>
    theme.typography.borderRadius[borderRadius]};
  border: ${({ theme, borderWidth }) =>
      theme.typography.borderWidth[borderWidth]}
    solid ${({ theme, borderColor }) => theme.colors[borderColor]};
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
`;
