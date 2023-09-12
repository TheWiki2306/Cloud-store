import styled from "styled-components";
// import img from "../src/assets/images/iwatch.png";

export const Wrapper = styled.div`
    
    /* background: #F5D7DB; */

    .navLink{
        /* background: #F5D7DB; */
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 1rem;
        background: url('./assets/images/iwatch.png');
        width: 95%;
        margin: 0 auto;

    }

    .link{
        color: #06142E;
        font-weight: bold;
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        width: 70%;
        margin: 0;
    }

`;