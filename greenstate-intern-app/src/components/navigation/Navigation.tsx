import { NavItemProps } from "../nav-item/NavItem";
import { NavItem } from "../nav-item/NavItem";
import { StyledNavigation } from "./Navigation.styles";

type NavigationProps = {
  items: NavItemProps[];
  selectedItem?: string;
  onItemClick: (route?: string, value?: string) => void;
};

export const Navigation = ({
  items,
  selectedItem,
  onItemClick,
}: NavigationProps) => {
  return (
    <StyledNavigation>
      {items.map((item) => (
        <NavItem
          key={item.value}
          icon={item.icon}
          onClick={() => onItemClick(item.route, item.value)}
          title={item.title}
          isActive={selectedItem === item.value}
        ></NavItem>
      ))}
    </StyledNavigation>
  );
};
