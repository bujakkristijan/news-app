import { StyledNavItem } from './NavItem.styles';
import { TypographyIconSize, Color } from '../../shared/theme/theme';
import IconWrapper from '../icon/icon-wrapper/IconWrapper';
import { IconProps } from '../icon/icon-prop/iconProps';

interface NavItemProps {
  icon: React.ComponentType<IconProps>;
  text: React.ReactNode;
  size: TypographyIconSize | 'fill';
  color: Color;
}

export const NavItem = ({ icon, text, size, color }: NavItemProps) => {
  return (
    <StyledNavItem>
      <IconWrapper icon={icon} size={size} color={color} />
      {text}
    </StyledNavItem>
  );
};
