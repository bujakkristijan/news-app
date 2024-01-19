import { StyledNavItem } from './NavItem.styles';
import IconWrapper from '../icon/icon-wrapper/IconWrapper';
import { IconProps } from '../icon/icon-prop/iconProps';
import { Text } from '../text/Text';

interface NavItemProps {
  icon: React.ComponentType<IconProps>;
  children: string;
  onClick?: () => void;
}

export const NavItem = ({ icon: Icon, children, onClick }: NavItemProps) => {

    const handleClick = () => {
        if (onClick) {
          onClick();
        }
      };

  return (
    <StyledNavItem onClick={handleClick}>
      <IconWrapper icon={Icon} size='sm' color="grey" />
      <Text fontSize="md" fontWeight="regular" lineHeight="lg" fontFamily="inter" color="grey">
        {children}
      </Text>
    </StyledNavItem>
  );
};
