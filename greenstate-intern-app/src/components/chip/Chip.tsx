import React from 'react'
import { StyledChip } from './Chip.styles';
import { Text } from '../text/Text';
import { StyledChipCircle } from './ChipCircle.styles';

type ChipProps = {
    children: string; 
    isActive: boolean;
  }

export const Chip = ({children, isActive}: ChipProps) => {
  return (
    <StyledChip>
        <Text fontSize="sm" lineHeight = "sm" fontWeight = "semiBold" fontFamily="inter">{children}</Text>
        {isActive && <StyledChipCircle/>}
    </StyledChip>
  )
}
