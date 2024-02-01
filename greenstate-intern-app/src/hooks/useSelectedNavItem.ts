import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navigationItems } from "../shared/data/navigation/items/items";

export const useSelectedNavItem = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [selectedNavItem, setSelectedNavItem] = useState<string>();

  useEffect(() => {
    const normalizedPathname = pathname.replace(/\/+$/, "");
    const currentRouteItem =
      normalizedPathname === ""
        ? navigationItems[0]
        : navigationItems.find((item) => item.route === normalizedPathname);
    if (currentRouteItem) {
      setSelectedNavItem(currentRouteItem.value);
      navigate(currentRouteItem.route);
    } else {
      setSelectedNavItem(navigationItems[0].value);
      navigate(navigationItems[0].route);
    }
  }, [pathname, navigate]);

  return { selectedNavItem };
};
