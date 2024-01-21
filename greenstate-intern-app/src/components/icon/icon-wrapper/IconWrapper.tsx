import React from 'react';
import { StyledIcon } from './StyledIcon';
import { TypographyIconSize } from '../../../shared/theme/theme';
import { Color } from '../../../shared/theme/theme';
import { IconProps } from '../icon-prop/iconProps';

type IconWrapperProps = {
  icon: React.ComponentType<IconProps>; // It's not neccessary to has type IconProps anymore, because I don't pass color to IconComponent anymore
  size: TypographyIconSize | 'fill';
  color: Color;
};

export const IconWrapper = ({ icon: IconComponent, size, color } :IconWrapperProps) => {
  return (
    <StyledIcon size={size} color={color}>
      <IconComponent/>
    </StyledIcon>
  );
};

export default IconWrapper;
