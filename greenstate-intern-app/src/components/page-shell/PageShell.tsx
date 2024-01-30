import React from "react";
import { StyledPageShell } from "./PageShell.styles";

type PageShellProps = {
  children: React.ReactNode;
};

export const PageShell = ({ children }: PageShellProps) => {
  return <StyledPageShell>{children}</StyledPageShell>;
};
