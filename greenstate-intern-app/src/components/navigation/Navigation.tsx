import { NavItemProps } from "../nav-item/NavItem";
import { NavItem } from "../nav-item/NavItem";
import { StyledNavigation } from "./Navigation.styles";

type NavigationProps = {
  items: NavItemProps[];
  selectedItem?: string;
};

export const Navigation = ({ items, selectedItem }: NavigationProps) => {
  return (
    <StyledNavigation>
      {items.map((item) => (
        <NavItem
          key={item.value}
          icon={item.icon}
          onClick={item.onClick}
          title={item.title}
          isActive={selectedItem === item.value}
        ></NavItem>
      ))}
    </StyledNavigation>
  );
};
