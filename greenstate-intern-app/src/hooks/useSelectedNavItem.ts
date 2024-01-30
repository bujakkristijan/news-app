import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navigationItems } from "../shared/data/navigation/items/items";

const findCurrentRouteItem = (pathname: string) => {
  let normalizedPathname = pathname.replace(/\/+$/, "");
  console.log("NormalizedPathname: " + normalizedPathname);
  if (normalizedPathname === "") {
    normalizedPathname = "/";
  }
  return navigationItems.find((item) => item.route === normalizedPathname);
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
    console.log("CurrentRoute: " + currentRouteItem?.route);
    setSelectedNavItem(
      currentRouteItem ? currentRouteItem.value : navigationItems[0].value,
    );

    currentRouteItem
      ? navigate(currentRouteItem.route)
      : navigate(navigationItems[0].route);
  }, [pathname, navigate]);

  return { selectedNavItem, setSelectedNavItem };
};
