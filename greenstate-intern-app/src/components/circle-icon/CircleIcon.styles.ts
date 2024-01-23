import styled from "styled-components";
import { Color } from "../../shared/theme/theme";
import { TypographyIconSize } from "../../shared/theme/theme";

export const StyledCircleIcon = styled.div<{
  size: TypographyIconSize;
  color: Color;
}>`
  width: ${({ theme, size }) =>
    `calc(2 * ${theme.typography.iconSizes[size]})`};
  height: ${({ theme, size }) =>
    `calc(2 * ${theme.typography.iconSizes[size]})`};
  border-radius: 50%;
  background-color: ${({ theme, color }) => theme.colors[color]};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
