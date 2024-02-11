import { Outlet } from "react-router-dom";
import { Navigation } from "../components/navigation/Navigation";
import { StyledLayout } from "./Layout.styles";
import { PageShell } from "../components/page-shell/PageShell";
import { navigationItems } from "../shared/data/navigation/items/items";
import { StyledPageShellWrapper } from "./Layout.styles";
import { useControlNavigation } from "../hooks/use-control-navigation/useControlNavigation";
import { NavItem } from "../shared/types/ui-model/navItem";
import { useNavigate } from "react-router-dom";
// import { useAppState } from "../store/useAppState";
// import { LoadingSpinner } from "../components/loading-spinner/LoadingSpinner";
// import { ErrorFetch } from "../pages/error-fetch/ErrorFetch";

export const Layout = () => {
  const { selectedNavItem } = useControlNavigation();
  // const { isLoading, isError } = useAppState();
  const navigate = useNavigate();

  const handleItemClick = (item: NavItem) => {
    navigate(item.route);
  };

  return (
    <StyledLayout>
      <Navigation
        items={navigationItems}
        selectedItem={selectedNavItem?.value}
        onItemClick={handleItemClick}
      />
      {/* {isLoading && <LoadingSpinner />}
      {isError && <ErrorFetch />} */}
      <StyledPageShellWrapper>
        <PageShell>
          <Outlet />
        </PageShell>
      </StyledPageShellWrapper>
    </StyledLayout>
  );
};
