import { StyledNavItem } from './NavItem.styles';
import IconWrapper from '../icon/icon-wrapper/IconWrapper';
import { IconProps } from '../icon/icon-prop/iconProps';
import { Text } from '../text/Text';

interface NavItemProps {
  icon: React.ComponentType<IconProps>;
  children: string;
  onClickFunc?: () => void;
}

export const NavItem = ({ icon: Icon, children, onClickFunc }: NavItemProps) => {

  return (
    <StyledNavItem onClick={onClickFunc}>
      <IconWrapper icon={Icon} size='sm' color="grey" />
      <Text fontSize="md" fontWeight="regular" lineHeight="lg" fontFamily="inter" color="grey">
        {children}
      </Text>
    </StyledNavItem>
  );
};
