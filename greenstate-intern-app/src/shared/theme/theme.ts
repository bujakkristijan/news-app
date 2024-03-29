import { Theme } from "./ThemeTypeProps";
export type TypographyFontSize = keyof Theme["typography"]["fontSize"];
export type TypographyFontFamily = keyof Theme["typography"]["fontFamily"];
export type TypographyFontWeight = keyof Theme["typography"]["fontWeight"];
export type TypographyLineHeight = keyof Theme["typography"]["lineHeight"];
export type TypographyHeadingType = keyof Theme["typography"]["headingType"];
export type Color = keyof Theme["colors"];
export type TypographyIconSize = keyof Theme["typography"]["iconSizes"];
export type TypographyButtonSize = keyof Theme["typography"]["buttonSizes"];
export type TypographyBorderRadius = keyof Theme["typography"]["borderRadius"];
export type TypographyBorderWidth = keyof Theme["typography"]["borderWidth"];

const defaultTheme: Theme = {
  typography: {
    fontFamily: {
      montserrat: "Montserrat",
      inter: "Inter",
    },
    fontSize: {
      xLg: "1.5rem",
      lg: "1.25rem",
      md: "1rem",
      sm: "0.875rem",
      xSm: "0.75rem",
    },
    fontWeight: {
      extraBold: "700",
      bold: "600",
      semiBold: "500",
      regular: "400",
    },
    lineHeight: {
      xLg: "1.75rem",
      lg: "1.5rem",
      md: "1.25rem",
      sm: "1rem",
    },
    headingType: {
      h1: {
        fontSize: "3rem",
        lineHeight: "3.5rem",
      },
      h2: {
        fontSize: "2.25rem",
        lineHeight: "2.75rem",
      },
      h3: {
        fontSize: "1.5rem",
        lineHeight: "1.75rem",
      },
    },
    borderRadius: {
      sm: "0.5rem",
      md: "1rem",
    },
    borderWidth: {
      sm: "1px",
      md: "2px",
      lg: "4px",
    },
    iconSizes: {
      sm: "1.5rem",
      md: "2rem",
      lg: "2.5rem",
    },
    buttonSizes: {
      sm: {
        padding: "0.5rem",
        borderRadius: "0.5rem",
      },
      md: {
        padding: "0.625rem 0.875rem",
        borderRadius: "0.75rem",
      },
      lg: {
        padding: "0.75rem 1rem",
        borderRadius: "0.75rem",
      },
      xlg: {
        padding: "1rem 1.5rem",
        borderRadius: "0.75rem",
      },
    },
  },
  colors: {
    red: "#EE2636",
    darkRed: "#FF4242",
    darkerRed: "#DA0000",
    lightRed: "#FAD1D1",
    white: "white",
    blue: "#297BD2",
    grey: "#767B83",
    darkGrey: "#7B828A",
    lightGrey: "#C9D2DE",
    lighterGrey: "#EFEFEF",
    lightestGrey: "#E6E6E6",
    greyHomeBanner: "#F1F1F1",
    greyDesc: "#5D5D63",
    greyDisabled: "#F3F4F8",
    greyError: "#606060",
    black: "#111111",
    lightBlack: "#181E25",
    lighterBlack: "#242424",
    green: "#18B815",
    lightGreen: "#D1FADF",
    lighterGreen: "#F3FFF7",
    orange: "#FFA218",
    lightOrange: "#FAEAD1",
    purple: "#7E44F8",
    lightPurple: "#9867FF",
    darkPurple: "#733CE5",
    lightBlue: "#2D99E7",
    darkBlue: "#2249AF",
  },
};

export default defaultTheme;
