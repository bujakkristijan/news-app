import styled from "styled-components";
import { Padding } from "../../shared/types/padding";
import {
  TypographyBorderRadius,
  TypographyBorderWidth,
} from "../../shared/theme/theme";
import { Color } from "../../shared/theme/theme";
export const StyledCard = styled.div<{
  $borderWidth: TypographyBorderWidth;
  $borderRadius: TypographyBorderRadius;
  $bgColor: Color;
  $borderColor: Color;
  $padding: Padding;
}>`
  width: fit-content;
  padding: ${({ $padding }) => $padding};
  border-radius: ${({ theme, $borderRadius }) =>
    theme.typography.borderRadius[$borderRadius]};
  border: ${({ theme, $borderWidth }) =>
      theme.typography.borderWidth[$borderWidth]}
    solid ${({ theme, $borderColor }) => theme.colors[$borderColor]};
  background-color: ${({ theme, $bgColor }) => theme.colors[$bgColor]};
`;