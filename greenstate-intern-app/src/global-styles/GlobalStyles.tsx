import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        border: none;
    }
    body {
        font-family: 'Inter';
    }
`

export default GlobalStyles