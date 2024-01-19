import React from 'react'
import { StyledChip } from './Chip.styles';
import { StyledChipCircle } from './ChipCircle.styles';
import { Text } from '../text/Text';

type ChipProps = {
    children: string;
    isActive: boolean;
  }

export const Chip = ({children, isActive}: ChipProps) => {

  const fontSize = "sm";
  const lineHeight = "sm";
  const fontWeight = "semiBold";
  const fontFamily = "inter";
  const textColor = "black";
  
  return (
    <StyledChip>
        <Text fontSize={fontSize} fontWeight={fontWeight} lineHeight={lineHeight} fontFamily={fontFamily} color={textColor}>
          {children}
        </Text>
        {isActive && <StyledChipCircle/>}
    </StyledChip>
  )
}
