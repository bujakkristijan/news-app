import { Outlet } from "react-router-dom";
import { HeaderNavigation } from "./header-navigation/HeaderNavigation";
import { StyledLayout } from "./Layout.styles";
import { PageShell } from "./page-shell/PageShell";

export const Layout = () => {
  return (
    <StyledLayout>
      <HeaderNavigation />
      <PageShell>
        <Outlet />
      </PageShell>
    </StyledLayout>
  );
};
