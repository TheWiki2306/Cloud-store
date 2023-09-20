import styled from "styled-components";
import Award from '../../assets/icons/medal-award-svgrepo-com.svg'

export const Container = styled.div`
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 70%;
    margin: 0 auto;
    margin-top: 5rem;

    h1{
        font-size: 2em;
        text-align: center;
        width: 50%;
    }

    .image{
        width: 50%;
        margin-top: 2rem;
    }

    p{
        width: 50%;
        font-size: 0.8em;
        color: #473E66;
        margin-top: 2rem;
    }

    article{
        display: flex;
        align-items: center;
        gap: 2rem;
        background: #E9DCC9;
        margin-bottom: 1rem;
        padding: 1rem 1rem;
    }

    .icon{
        fill: #06142E;
        width: 10%;
        height: 1.2rem;
    }

    /* small{
        color: #BD83B8;
    } */

    @media(max-width: ${({theme}) => theme.mobile}){
        width: 80%;
    }

    @media(max-width: ${({theme}) => theme.mobileprime}){
        display: block;
        text-align: center;

        h1{
            text-aign: center;
            width: 100%
        }

        img{
            /* text-align: center; */
            width: 100%;
            margin: 0 auto;
        }

        p{
            text-align: center;
            width: 100%
        }

        .info{
            margin-top: 3rem;
            text-align: justify;
        }
    }

   
`;

