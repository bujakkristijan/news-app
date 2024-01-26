import { StyledNavItem } from "./NavItem.styles";
import IconWrapper from "../icon/icon-wrapper/IconWrapper";
import { Text } from "../text/Text";

export type NavItem = {
  icon: React.ComponentType;
  title: string;
  onClick?: () => void;
  isActive?: boolean;
};

export const NavItem = ({ icon: Icon, title, onClick, isActive }: NavItem) => {
  return (
    <StyledNavItem className={isActive ? "active" : ""} onClick={onClick}>
      <IconWrapper icon={Icon} size="sm" color={isActive ? "blue" : "grey"} />
      <Text
        fontSize="md"
        fontWeight={isActive ? "extraBold" : "regular"}
        lineHeight="lg"
        fontFamily="inter"
        color={isActive ? "blue" : "grey"}
      >
        {title}
      </Text>
    </StyledNavItem>
  );
};
