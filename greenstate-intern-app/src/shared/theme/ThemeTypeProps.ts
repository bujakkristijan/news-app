export type Theme = {
    typography:{
        font:{
            navigation:string,
            body:string
        },
        // fontSizeHeading:{
        //     sm:string,
        //     md:string,
        //     lg:string
        // },
        fontSizeBody:{
            sm:string;
            md:string;
            lg:string
        }
        fontWeight:{
            bold:string,
            semiBold:string,
            regular:string
        },
        
        // lineHeightHeading:{
        //     sm:string,
        //     md:string,
        //     lg:string
        // },
        lineHeightBody:{
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