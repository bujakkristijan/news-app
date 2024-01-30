import { Outlet } from "react-router-dom";
import { Navigation } from "../components/navigation/Navigation";
import { StyledLayout } from "./Layout.styles";
import { PageShell } from "../components/page-shell/PageShell";
import { navigationItems } from "../shared/data/navigation/items/items";
import { StyledPageShellWrapper } from "./Layout.styles";
import { useSelectedNavItem } from "./useSelectedNavItem";

export const Layout = () => {
  const { selectedNavItem, handleItemClick } = useSelectedNavItem();

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
