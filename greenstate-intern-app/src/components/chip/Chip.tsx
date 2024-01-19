import React from 'react'
import { StyledChip } from './Chip.styles';
import { StyledChipCircle } from './ChipCircle.styles';
import { Text } from '../text/Text';

type ChipProps = {
    children: string;
    isActive?: boolean;
  }

export const Chip = ({children, isActive=false}: ChipProps) => {
  
  return (
    <StyledChip>
        <Text fontSize="sm" fontWeight="semiBold" lineHeight="sm" fontFamily="inter" color="black">
          {children}
        </Text>
        {isActive && <StyledChipCircle/>}
    </StyledChip>
  )
}
