import { Theme } from "./ThemeTypeProps";
// export type TypographyFontSizeHeading = keyof Theme['typography']['fontSizeHeading'];
export type TypographyFontSizeBody = keyof Theme['typography']['fontSizeBody'];
export type TypographyFont = keyof Theme['typography']['font'];
export type TypographyFontWeight = keyof Theme['typography']['fontWeight'];
// export type TypographyLineHeightHeading = keyof Theme['typography']['lineHeightHeading'];
export type TypographyLineHeightBody = keyof Theme['typography']['lineHeightBody'];
export type TypographyHeadingType = keyof Theme['typography']['headingType'];


const defaultTheme: Theme = {
    typography: {
        font:{
            navigation: "Montserrat",
            body: "Inter"
        },
        // fontSizeHeading: {
        //     lg: "3rem",
        //     md: "2rem",
        //     sm: "1.5rem"
        // },
        fontSizeBody: {
            lg: "1.25rem",
            md: "1rem",
            sm: "0.875rem"
        },
        fontWeight: {
            bold: "700",
            semiBold: "600",
            regular: "400"  
        },
        // lineHeightHeading: {
        //     lg: "56px",
        //     md: "44px",
        //     sm: "28px"
        // },
        lineHeightBody: {
            lg: "24px",
            md: "20px",
            sm: "16px"
        },
        headingType:{
            h1:{
                fontSize: "3rem",
                lineHeight: "56px"
            },
            h2:{
                fontSize: "2rem",
                lineHeight: "44px"
            },
            h3:{
                fontSize: "1.5rem",
                lineHeight: "28px"
            }
        }
    } 
  };

export default defaultTheme;