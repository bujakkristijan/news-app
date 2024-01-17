import { Theme } from "./ThemeTypeProps";
export type TypographyFontSize = keyof Theme['typography']['fontSize'];
export type TypographyFontFamily = keyof Theme['typography']['fontFamily'];
export type TypographyFontWeight = keyof Theme['typography']['fontWeight'];
export type TypographyLineHeight = keyof Theme['typography']['lineHeight'];
export type TypographyHeadingType = keyof Theme['typography']['headingType'];


const defaultTheme: Theme = {
    typography: {
        fontFamily:{
            montserrat: "Montserrat",
            inter: "Inter"
        },
        fontSize: {
            lg: "1.25rem",
            md: "1rem",
            sm: "0.875rem"
        },
        fontWeight: {
            extraBold: "700",
            bold: "600",
            semiBold: "500",
            regular: "400"  
        },
        lineHeight: {
            lg: "1.5rem", 
            md: "1.25rem", 
            sm: "1rem", 
        },
        headingType:{
            h1:{
                fontSize: "3rem",
                lineHeight: "3.5rem"
            },
            h2:{
                fontSize: "2.25rem",
                lineHeight: "2.75rem"
            },
            h3:{
                fontSize: "1.5rem",
                lineHeight: "1.75rem"
            }
        },
        borderRadius:{
            sm: "0.5rem",
            md: "1rem"
        },
        colors: {
            red: "#EE2636",
            white: "white"
        }
    } 
  };

export default defaultTheme;