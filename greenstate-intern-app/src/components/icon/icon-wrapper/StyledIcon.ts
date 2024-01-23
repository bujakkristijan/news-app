import styled from "styled-components";
import { Color, TypographyIconSize } from "../../../shared/theme/theme";

interface StyledIconProps {
  size: TypographyIconSize | "fill";
  color: Color;
}

export const StyledIcon = styled.div<StyledIconProps>`
  width: ${({ theme, size }) =>
    size === "fill" ? "100%" : theme.typography.iconSizes[size]};
  height: ${({ theme, size }) =>
    size === "fill" ? "100%" : theme.typography.iconSizes[size]};
  color: ${({ theme, color }) => theme.colors[color]};
`;
