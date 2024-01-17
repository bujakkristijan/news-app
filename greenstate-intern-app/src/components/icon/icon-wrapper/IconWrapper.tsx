import React from 'react'
import { StyledIcon } from './StyledIcon';

type IconWrapper = {
    icon: React.ReactNode;
    width: string;
    height: string;
    color: string;
  }

export const IconWrapper = ({ icon, width, height, color} : IconWrapper) => {
    return (
      <StyledIcon width={width} height={height} color={color}>
        {icon}
      </StyledIcon>
    );
  };
