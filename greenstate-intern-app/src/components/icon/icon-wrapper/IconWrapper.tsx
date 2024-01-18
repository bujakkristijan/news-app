import React from 'react';
import { StyledIcon } from './StyledIcon';
import { TypographyIconSize } from '../../../shared/theme/theme';
import { Color } from '../../../shared/theme/theme';
import { IconProps } from '../icon-prop/iconProps';

type IconWrapperProps = {
  icon: React.ComponentType<IconProps>;
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
