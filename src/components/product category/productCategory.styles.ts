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
        display: flex;
        justify-content: space-between;
        width: 90%;
        margin: 0 auto;
    }

    article{
        font-size: 0.6em;
        border: 1px #BD83B8 solid;
        border-radius: 2rem;
        padding: 1rem 4rem;
    }

    article:hover{
        background: #BD83B8;
        color: #ffff;
        transition: 0.5s ease;
    }
`; 