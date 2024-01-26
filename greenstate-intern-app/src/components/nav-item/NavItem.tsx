import { StyledNavItem, StyledTextWrapper } from "./NavItem.styles";
import IconWrapper from "../icon/icon-wrapper/IconWrapper";
import { Text } from "../text/Text";

export type NavItemProps = {
  icon: React.ComponentType;
  title: string;
  onClick?: () => void;
  isActive?: boolean;
};

export const NavItem = ({
  icon: Icon,
  title,
  onClick,
  isActive,
}: NavItemProps) => {
  return (
    <StyledNavItem className={isActive ? "active" : ""} onClick={onClick}>
      <IconWrapper icon={Icon} size="sm" color={isActive ? "blue" : "grey"} />
      <StyledTextWrapper>
        <Text
          fontSize="md"
          fontWeight={isActive ? "extraBold" : "regular"}
          lineHeight="lg"
          fontFamily="inter"
          color={isActive ? "blue" : "grey"}
          noWrap={true}
        >
          {title}
        </Text>
      </StyledTextWrapper>
    </StyledNavItem>
  );
};
