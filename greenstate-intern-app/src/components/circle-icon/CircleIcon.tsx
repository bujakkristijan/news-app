import { StyledCircleIcon } from './CircleIcon.styles';
import IconWrapper from '../icon/icon-wrapper/IconWrapper';
import { Color } from '../../shared/theme/theme';
import { SuccessIcon } from '../../assets/icons/SuccessIcon';
import { WarningIcon } from '../../assets/icons/WarningIcon';
import { ErrorIcon } from '../../assets/icons/ErrorIcon';

interface CircleIconProps {
  icon: "success" | "warning" | "error";
}

interface IconDetails {
    selectedIcon: React.ComponentType;
    color: Color;
    bgColor: Color;
  }

const getIconDetails = (icon: CircleIconProps['icon']): IconDetails  => {
  switch (icon) {
    case "success":
      return { selectedIcon: SuccessIcon, color: 'green', bgColor: 'lightGreen'};
    case "warning":
      return { selectedIcon: WarningIcon, color: 'orange', bgColor: 'lightOrange'};
    case "error":
      return { selectedIcon: ErrorIcon, color: 'darkerRed', bgColor: 'lightRed'};
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
