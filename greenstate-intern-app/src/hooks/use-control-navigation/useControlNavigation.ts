import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navigationItems } from "../../shared/data/navigation/items/items";
import { NavItem } from "../../shared/types/ui-model/navItem";
import { removeTrailingSlashes } from "../../shared/regex/pathUtils";

export const useControlNavigation = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [selectedNavItem, setSelectedNavItem] = useState<NavItem>();

  useEffect(() => {
    const currentRouteItem = navigationItems.find(
      (item) => item.route === pathname,
    );

    if (currentRouteItem) {
      setSelectedNavItem(currentRouteItem);
    } else {
      if (pathname.endsWith("/") && pathname !== "/") {
        const pathnameWithoutTrailingSlashes = removeTrailingSlashes(pathname);
        pathnameWithoutTrailingSlashes
          ? navigate(pathnameWithoutTrailingSlashes)
          : (location.href = "/");
      }
    }
  }, [pathname, navigate]);

  return { selectedNavItem };
};
