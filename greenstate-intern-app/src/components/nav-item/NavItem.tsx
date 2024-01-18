import { StyledNavItem } from './NavItem.styles';
import IconWrapper from '../icon/icon-wrapper/IconWrapper';
import { IconProps } from '../icon/icon-prop/iconProps';
import { Text } from '../text/Text';

interface NavItemProps {
  icon: React.ComponentType<IconProps>;
  text: string;
}

export const NavItem = ({ icon: Icon, text }: NavItemProps) => {
    
    const iconSize = 'sm'; 
    const iconColor = "grey";
    const fontSize = "md";
    const fontWeight = "regular";
    const lineHeight = "lg";
    const textColor = "grey";
    const fontFamily = "inter";

  return (
    <StyledNavItem>
      <IconWrapper icon={Icon} size={iconSize} color={iconColor} />
      <Text fontSize={fontSize} fontWeight={fontWeight} lineHeight={lineHeight} fontFamily={fontFamily} color={textColor}>
        {text}
      </Text>
    </StyledNavItem>
  );
};
