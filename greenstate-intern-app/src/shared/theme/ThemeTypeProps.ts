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
        }
    }
}
