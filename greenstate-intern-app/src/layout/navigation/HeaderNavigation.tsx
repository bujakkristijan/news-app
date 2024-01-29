import { useState } from "react";
import { navigationItems } from "../../shared/data/navigation/items/items";
import { NavItem } from "../../shared/types/ui-model/navItem";
import { Navigation } from "../../components/navigation/Navigation";
import { useNavigate } from "react-router-dom";

export const HeaderNavigation = () => {
  const navigate = useNavigate();

  const [selectedNavItem, setSelectedNavItem] = useState(
    navigationItems[0].value
  );

  const handleItemClick = (item: NavItem) => {
    navigate(String(item.route));
    console.log(item.route);
    setSelectedNavItem(item.value);
  };
  return (
    <Navigation
      items={navigationItems}
      selectedItem={selectedNavItem}
      onItemClick={handleItemClick}
    />
  );
};
