import { StyledCircleIcon } from './CircleIcon.styles';
import IconWrapper from '../icon/icon-wrapper/IconWrapper';
import { Color } from '../../shared/theme/theme';
import { SuccessIcon } from '../../assets/icons/SuccessIcon';
import { WarningIcon } from '../../assets/icons/WarningIcon';
import { ErrorIcon } from '../../assets/icons/ErrorIcon';

interface CircleIconProps {
  icon: "success" | "warning" | "error";
}

const getIconDetails = (icon: CircleIconProps['icon']) => {
  switch (icon) {
    case "success":
      return { selectedIcon: SuccessIcon, color: 'green' as Color, bgColor: 'lightGreen' as Color};
    case "warning":
      return { selectedIcon: WarningIcon, color: 'orange' as Color, bgColor: 'lightOrange' as Color};
    case "error":
      return { selectedIcon: ErrorIcon, color: 'darkerRed' as Color, bgColor: 'lightRed' as Color};
    default:
      throw new Error(`Unsupported icon: ${icon}`);
  }
};

export const CircleIcon = ({ icon }: CircleIconProps) => {
  let { selectedIcon, color, bgColor } = getIconDetails(icon);

  return (
    <StyledCircleIcon color={bgColor} size='sm'>
      <IconWrapper icon={selectedIcon} size='sm' color={color}/>
    </StyledCircleIcon>
  );
};
