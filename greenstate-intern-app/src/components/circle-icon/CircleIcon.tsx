import React from 'react'
import { IconProps } from '../icon/icon-prop/iconProps';
import { StyledCircleIcon } from './CircleIcon.styles';
import IconWrapper from '../icon/icon-wrapper/IconWrapper';
import { Color } from '../../shared/theme/theme';
import { SuccessIcon } from '../../assets/icons/SuccessIcon';
import { WarningIcon } from '../../assets/icons/WarningIcon';
import { ErrorIcon } from '../../assets/icons/ErrorIcon';

interface CirclIconProps {
    icon: React.ComponentType<IconProps>;
  }

export const CircleIcon = ({ icon: Icon }: CirclIconProps) => {

    let color: Color;
    let bgColor: Color;
  
    if (Icon === SuccessIcon) {
      color = 'green';
      bgColor = 'lightGreen';
    } else if (Icon === WarningIcon) {
      color = 'orange';
      bgColor = 'lightOrange';
    } else if (Icon === ErrorIcon) {
      color = 'darkerRed';
      bgColor = 'lightRed';
    } 
    else {
        color = 'black';
        bgColor = 'blue';
      }
  return (
    <StyledCircleIcon color={bgColor} size='sm'>
        <IconWrapper icon={Icon} size='sm' color={color}/>
    </StyledCircleIcon>
  )
}
