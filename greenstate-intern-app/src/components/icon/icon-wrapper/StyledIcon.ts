import styled from "styled-components";
import { TypographyIconSize } from "../../../shared/theme/theme";

interface StyledIconProps {
    size: TypographyIconSize | 'fill';
  }

export const StyledIcon = styled.div<StyledIconProps>`
   width: ${({ theme, size }) => size === 'fill' ? '100%' : theme.typography.iconSizes[size]};
   height: ${({ theme, size }) => size === 'fill' ? '100%' : theme.typography.iconSizes[size]};
`;
