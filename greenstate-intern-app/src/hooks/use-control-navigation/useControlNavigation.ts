import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navigationItems } from "../../shared/data/navigation/items/items";
import { NavItem } from "../../shared/types/ui-model/navItem";

export const useControlNavigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [selectedNavItem, setSelectedNavItem] = useState<NavItem>();

  useEffect(() => {
    const normalizedPathname =
      pathname.endsWith("/") && pathname.length > 1
        ? pathname.replace(/\/+$/, "")
        : pathname;

    const currentRouteItem = navigationItems.find(
      (item) => item.route === normalizedPathname,
    );

    if (currentRouteItem) {
      setSelectedNavItem(currentRouteItem);
      navigate(currentRouteItem.route);
    } else if (normalizedPathname === "") {
      location.href = navigationItems[0].route;
      setSelectedNavItem(navigationItems[0]);
    }
  }, [pathname, navigate]);

  return { selectedNavItem };
};
