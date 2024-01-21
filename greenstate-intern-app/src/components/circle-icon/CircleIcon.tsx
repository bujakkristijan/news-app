import React from 'react'
import { IconProps } from '../icon/icon-prop/iconProps';
import { StyledCircleIcon } from './CircleIcon.styles';
import IconWrapper from '../icon/icon-wrapper/IconWrapper';
import { Color } from '../../shared/theme/theme';
import { SuccessIcon } from '../../assets/icons/SuccessIcon';
import { WarningIcon } from '../../assets/icons/WarningIcon';
import { ErrorIcon } from '../../assets/icons/ErrorIcon';

interface CircleIconProps {
    icon: "success" | "warning" | "error";
  }

export const CircleIcon = ({ icon }: CircleIconProps) => {

    let selectedIcon: React.ComponentType<IconProps>; // It's not neccessary to has type IconProps anymore, because I don't pass color to IconComponent anymore
    let color: Color;
    let bgColor: Color;
  
    if (icon === "success") {
        selectedIcon = SuccessIcon;
        color = 'green';
        bgColor = 'lightGreen';
    } else if (icon === "warning") {
        selectedIcon = WarningIcon;
        color = 'orange';
        bgColor = 'lightOrange';
    } else if (icon === "error") {
        selectedIcon = ErrorIcon;
        color = 'darkerRed';
        bgColor = 'lightRed';
    } 
    else {
        selectedIcon = SuccessIcon;
        color = 'black';
        bgColor = 'blue';
      }
      
  return (
    <StyledCircleIcon color={bgColor} size='sm'>
        <IconWrapper icon={selectedIcon} size='sm' color={color}/>
    </StyledCircleIcon>
  )
}
