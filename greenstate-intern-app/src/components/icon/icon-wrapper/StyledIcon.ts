import styled from "styled-components";
import { TypographyIconSize } from "../../../shared/theme/theme";

interface StyledIconProps {
    size: TypographyIconSize;
  }

export const StyledIcon = styled.div<StyledIconProps>`
  width: ${({ theme, size }) => theme.typography.iconSizes[size]};
  height: ${({ theme, size }) => theme.typography.iconSizes[size]};
`;
