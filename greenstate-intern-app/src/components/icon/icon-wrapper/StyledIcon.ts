import styled from "styled-components";
import { Color, TypographyIconSize } from "../../../shared/theme/theme";

interface StyledIconProps {
    size: TypographyIconSize | 'fill';
    color: Color;
  }

export const StyledIcon = styled.div<StyledIconProps>`
   width: ${({ theme, size }) => size === 'fill' ? '100%' : theme.typography.iconSizes[size]};
   height: ${({ theme, size }) => size === 'fill' ? '100%' : theme.typography.iconSizes[size]};

   // all child elements will inherit this color and then I can set stroke or fill (css) property with currentColor
   // directly in any svg icon without the need to pass color as a prop
   color: ${({theme, color}) => theme.colors[color]};

   // if all icons (path elements) had the same css properties (stroke and fill), then I could set colors without the need to set those properties 
   // directly in svg icon element, but some icons have fill and some have stroke, 
   // so this code below won't work as expected for all icons 
   /*svg path{
    fill: ${({theme, color}) => theme.colors[color]};
    stroke: ${({theme, color}) => theme.colors[color]};
   } */ 
`
