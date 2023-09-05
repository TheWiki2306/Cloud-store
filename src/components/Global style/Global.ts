import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        text-decoration: none;
    }

    body{
        /* background: #fce7cc; */
        background: #F5D7DB;
        color: #ffff;
        font-family: Arial;
        width: 95%;
        margin: 0 auto;
        font-family: Algerian;
    }  

    p{
        color: black;
    }

    
`;

export default GlobalStyles;