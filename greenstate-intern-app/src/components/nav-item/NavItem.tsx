import { StyledNavItem } from "./NavItem.styles";
import IconWrapper from "../icon/icon-wrapper/IconWrapper";
import { Text } from "../text/Text";

interface NavItemProps {
  icon: React.ComponentType;
  children: string;
  onClick?: () => void;
  isActive?: boolean;
}

export const NavItem = ({
  icon: Icon,
  children,
  onClick,
  isActive,
}: NavItemProps) => {
  return (
    <StyledNavItem onClick={onClick}>
      <IconWrapper icon={Icon} size="sm" color={isActive ? "blue" : "grey"} />
      <Text
        fontSize="md"
        fontWeight={isActive ? "extraBold" : "regular"}
        lineHeight="lg"
        fontFamily="inter"
        color={isActive ? "blue" : "grey"}
      >
        {children}
      </Text>
    </StyledNavItem>
  );
};
