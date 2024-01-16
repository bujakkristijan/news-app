import defaultTheme from "./Theme";
import { ReactNode } from "react";
import { ThemeProvider as Theme } from "styled-components";

export default function ThemeProvider({children}:  { children: ReactNode }){
    return <Theme theme={defaultTheme}>{children}</Theme>
  }
