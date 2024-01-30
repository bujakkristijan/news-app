import { Outlet } from "react-router-dom";
import { Navigation } from "../components/navigation/Navigation";
import { StyledLayout } from "./Layout.styles";
import { PageShell } from "../components/page-shell/PageShell";
import { navigationItems } from "../shared/data/navigation/items/items";
import { StyledPageShellWrapper } from "./Layout.styles";
import { useSelectedNavItem } from "../hooks/useSelectedNavItem";
import { NavItem } from "../shared/types/ui-model/navItem";
import { useNavigate } from "react-router-dom";

export const Layout = () => {
  const { selectedNavItem, setSelectedNavItem } = useSelectedNavItem();
  const navigate = useNavigate();

  const handleItemClick = (item: NavItem) => {
    try {
      setSelectedNavItem(item.value);
      navigate(item.route);
    } catch (error) {
      setSelectedNavItem(navigationItems[0].value);
      navigate(navigationItems[0].route);
    }
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
