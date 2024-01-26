export type Theme = {
  typography: {
    fontFamily: {
      montserrat: string;
      inter: string;
    };
    fontSize: {
      xSm: string;
      sm: string;
      md: string;
      lg: string;
    };
    fontWeight: {
      extraBold: string;
      bold: string;
      semiBold: string;
      regular: string;
    };
    lineHeight: {
      sm: string;
      md: string;
      lg: string;
    };
    headingType: {
      h1: {
        fontSize: string;
        lineHeight: string;
      };
      h2: {
        fontSize: string;
        lineHeight: string;
      };
      h3: {
        fontSize: string;
        lineHeight: string;
      };
    };
    borderRadius: {
      sm: string;
      md: string;
    };
    borderWidth: {
      sm: string;
      md: string;
      lg: string;
    };
    iconSizes: {
      sm: string;
      md: string;
      lg: string;
    };
    buttonSizes: {
      sm: {
        padding: string;
        borderRadius: string;
      };
      md: {
        padding: string;
        borderRadius: string;
      };
      lg: {
        padding: string;
        borderRadius: string;
      };
      xlg: {
        padding: string;
        borderRadius: string;
      };
    };
  };
  colors: {
    red: string;
    darkRed: string;
    darkerRed: string;
    lightRed: string;
    white: string;
    lightGrey: string;
    blue: string;
    grey: string;
    greyDisabled: string;
    darkGrey: string;
    lighterGrey: string;
    lightestGrey: string;
    black: string;
    lighterBlack: string;
    green: string;
    lightGreen: string;
    orange: string;
    lightOrange: string;
    purple: string;
    lightPurple: string;
    darkPurple: string;
    lightBlack: string;
    greyDesc: string;
    lightBlue: string;
    darkBlue: string;
  };
};
