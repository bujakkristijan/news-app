export type Theme = {
    typography:{
        fontFamily:{
            montserrat:string,
            inter:string
        },
        fontSize:{
            sm:string;
            md:string;
            lg:string
        }
        fontWeight:{
            extraBold: string,
            bold:string,
            semiBold:string,
            regular:string
        },
        lineHeight:{
            sm:string,
            md:string,
            lg:string
        },
        headingType:{
            h1:{
                fontSize: string,
                lineHeight: string
            },
            h2:{
                fontSize: string,
                lineHeight: string
            },
            h3:{
                fontSize: string,
                lineHeight: string
            }
        },
        borderRadius:{
            sm: string,
            md: string
        },
        iconSizes:{
            sm: string,
            md: string,
            lg:string
        }
    },
    colors: {
        red: string,
        white: string,
        lightGrey: string,
        blue: string,
        grey: string,
        black: string
    },


}
