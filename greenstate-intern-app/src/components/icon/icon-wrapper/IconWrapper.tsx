import React from 'react';
import { StyledIcon } from './StyledIcon';
import { TypographyIconSize } from '../../../shared/theme/theme';
import { Color } from '../../../shared/theme/theme';

type IconWrapperProps = {
  icon: React.ComponentType<{ color: Color }>;
  size: TypographyIconSize;
  color: Color;
};

export const IconWrapper = ({ icon: IconComponent, size, color } :IconWrapperProps) => {
  return (
    <StyledIcon size ={size}>
      <IconComponent color={color} />
    </StyledIcon>
  );
};

export default IconWrapper;
