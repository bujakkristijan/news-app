import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavItem } from "../shared/types/ui-model/navItem";
import { navigationItems } from "../shared/data/navigation/items/items";

export const useSelectedNavItem = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [selectedNavItem, setSelectedNavItem] = useState(() => {
    const matchingItem = navigationItems.find(
      (item) => item.route === location.pathname,
    );
    return matchingItem ? matchingItem.value : navigationItems[0].value;
  });

  useEffect(() => {
    const normalizedPathname = location.pathname.replace(/\/+$/, "");
    const matchingItem = navigationItems.find(
      (item) => item.route === normalizedPathname,
    );

    if (matchingItem) {
      setSelectedNavItem(matchingItem.value);
    } else {
      navigate(String(navigationItems[0].route));
    }
  }, [location.pathname, navigate]);

  const handleItemClick = (item: NavItem) => {
    navigate(String(item.route));
    setSelectedNavItem(item.value);
  };

  return { selectedNavItem, handleItemClick };
};
