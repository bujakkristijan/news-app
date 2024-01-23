import styled from "styled-components";
import {
  TypographyBorderRadius,
  TypographyBorder,
  TypographyPadding,
  TypographyGap,
} from "../../shared/theme/theme";
import { Color } from "../../shared/theme/theme";
export const StyledCard = styled.div<{
  border: TypographyBorder;
  borderRadius: TypographyBorderRadius;
  bgColor: Color;
  padding: TypographyPadding;
  gap: TypographyGap;
  borderColor: Color;
}>`
  display: flex;
  width: 300px;
  padding: ${({ theme, padding }) => theme.typography.padding[padding]};
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme, gap }) => theme.typography.gap[gap]};
  border-radius: ${({ theme, borderRadius }) =>
    theme.typography.borderRadius[borderRadius]};
  border: ${({ theme, border }) => theme.typography.border[border]} solid
    ${({ theme, borderColor }) => theme.colors[borderColor]};
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
`;
