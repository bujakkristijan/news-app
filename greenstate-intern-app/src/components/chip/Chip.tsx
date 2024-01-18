import React from 'react'
import { StyledChip } from './Chip.styles';
import { StyledChipCircle } from './ChipCircle.styles';

type ChipProps = {
    children: React.ReactNode; 
    isActive: boolean;
  }

export const Chip = ({children, isActive}: ChipProps) => {
  return (
    <StyledChip>
        {children}
        {isActive && <StyledChipCircle/>}
    </StyledChip>
  )
}
