import { Outlet } from "react-router-dom";
import { Navigation } from "../components/navigation/Navigation";
import { StyledLayout } from "./Layout.styles";
import { PageShell } from "../components/page-shell/PageShell";
import { NavItem } from "../shared/types/ui-model/navItem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { navigationItems } from "../shared/data/navigation/items/items";

export const Layout = () => {
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
    <StyledLayout>
      <Navigation
        items={navigationItems}
        selectedItem={selectedNavItem}
        onItemClick={handleItemClick}
      />
      <PageShell>
        <Outlet />
      </PageShell>
    </StyledLayout>
  );
};
