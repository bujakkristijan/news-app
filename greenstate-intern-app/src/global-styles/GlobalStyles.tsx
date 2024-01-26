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
    input{
        font-size: 1rem;
        font-family: 'Inter';
        padding: 1rem 1.25rem;
    }
`;

export default GlobalStyles;
