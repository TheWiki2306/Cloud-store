import styled from "styled-components";

export const Container = styled.div`

    margin-top: 5rem;
    background: #E9DCC9;
    padding: 2rem;

    h2{
        text-align: center;
        color: #473E66;
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    .categories{
        /* display: flex; */
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 3rem;
        /* justify-content: space-between; */
        width: 90%;
        margin: 0 auto;
    }

    article{
        font-size: 0.6em;
        border: 1px #BD83B8 solid;
        border-radius: 2rem;
        padding: 1rem 4rem;
        margin: 0 auto;
    }

    article:hover{
        background: #BD83B8;
        color: #ffff;
        transition: 0.5s ease;
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        .categories{
            width: 50%;
            justify-content: none;
            /* flex: 2; */
            /* gap: 1rem; */
            margin: 0;
        }

        .article{
            padding: 0;
        }
    }
`; 