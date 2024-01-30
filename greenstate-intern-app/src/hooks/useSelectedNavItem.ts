import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navigationItems } from "../shared/data/navigation/items/items";

const findCurrentRouteItem = (pathname: string) => {
  const normalizedPathname = pathname.replace(/\/+$/, "");
  return normalizedPathname === ""
    ? navigationItems[0]
    : navigationItems.find((item) => item.route === normalizedPathname);
};

export const useSelectedNavItem = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [selectedNavItem, setSelectedNavItem] = useState(() => {
    const currentRouteItem = findCurrentRouteItem(pathname);
    return currentRouteItem ? currentRouteItem.value : navigationItems[0].value;
  });

  useEffect(() => {
    const currentRouteItem = findCurrentRouteItem(pathname);
    setSelectedNavItem(
      currentRouteItem ? currentRouteItem.value : navigationItems[0].value,
    );

    currentRouteItem
      ? navigate(currentRouteItem.route)
      : navigate(navigationItems[0].route);
  }, [pathname, navigate]);

  return { selectedNavItem };
};
