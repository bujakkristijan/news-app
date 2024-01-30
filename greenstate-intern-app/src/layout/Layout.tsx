import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { Navigation } from "../components/navigation/Navigation";
import { StyledLayout } from "./Layout.styles";
import { PageShell } from "../components/page-shell/PageShell";
import { NavItem } from "../shared/types/ui-model/navItem";
import { useState } from "react";
import { navigationItems } from "../shared/data/navigation/items/items";
import { StyledPageShellWrapper } from "./Layout.styles";

export const Layout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [selectedNavItem, setSelectedNavItem] = useState(() => {
    const matchingItem = navigationItems.find(
      (item) => item.route === location.pathname
    );
    return matchingItem ? matchingItem.value : navigationItems[0].value;
  });

  const handleItemClick = (item: NavItem) => {
    navigate(String(item.route));
    setSelectedNavItem(item.value);
  };

  return (
    <StyledLayout>
      <Navigation
        items={navigationItems}
        selectedItem={selectedNavItem}
        onItemClick={handleItemClick}
      />
      <StyledPageShellWrapper>
        <PageShell>
          <Outlet />
        </PageShell>
      </StyledPageShellWrapper>
    </StyledLayout>
  );
};
