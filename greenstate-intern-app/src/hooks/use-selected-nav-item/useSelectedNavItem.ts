import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navigationItems } from "../../shared/data/navigation/items/items";

export const useSelectedNavItem = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [selectedNavItem, setSelectedNavItem] = useState<string>();

  useEffect(() => {
    console.log(pathname)
    const normalizedPathname = pathname.endsWith("//")
      ? pathname.replace(/\/+$/, "")
      : pathname;

    const currentRouteItem = navigationItems.find(
      (item) => item.route === normalizedPathname,
    );

    if (currentRouteItem) {
      setSelectedNavItem(currentRouteItem.value);
      navigate(currentRouteItem.route);
    } else if (normalizedPathname === "") {
      location.href = navigationItems[0].route;
      setSelectedNavItem(navigationItems[0].value);
    } 
    else if (normalizedPathname.endsWith("/")) {
      const pathWithoutSlash = normalizedPathname.replace(/\/+$/, "");
      const currentRouteItem = navigationItems.find(
        (item) => item.route === pathWithoutSlash,
      );
      if (currentRouteItem) {
        setSelectedNavItem(currentRouteItem.value);
        navigate(currentRouteItem.route);
      }
    }
  }, [pathname, navigate]);

  return { selectedNavItem };
};
