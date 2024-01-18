import React from 'react';
import { StyledIcon } from './StyledIcon';

type IconWrapperProps = {
  icon: React.ComponentType<{ color: string }>;
  size: string;
  color: string;
};

export const IconWrapper = ({ icon: IconComponent, size, color } :IconWrapperProps) => {
  return (
    <StyledIcon size ={size}>
      <IconComponent color={color} />
    </StyledIcon>
  );
};

export default IconWrapper;
