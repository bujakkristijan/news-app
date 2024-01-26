import { NavItem } from "../../shared/types/ui-model/navItem";
import { NavItem as NavItemComponent } from "../nav-item/NavItem";
import { StyledNavigation } from "./Navigation.styles";

type NavigationProps = {
  items: NavItem[];
  selectedItem?: string;
  onItemClick: (item: NavItem) => void;
};

export const Navigation = ({
  items,
  selectedItem,
  onItemClick,
}: NavigationProps) => {
  return (
    <StyledNavigation>
      {items.map((item) => (
        <NavItemComponent
          key={item.value}
          icon={item.icon}
          onClick={() => onItemClick(item)}
          title={item.title}
          isActive={selectedItem === item.value}
        ></NavItemComponent>
      ))}
    </StyledNavigation>
  );
};
