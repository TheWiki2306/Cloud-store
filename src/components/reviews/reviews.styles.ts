import styled from 'styled-components';


export const Container = styled.div`
    /* margin-top: 5rem; */
    width: 40%;
    margin: 5rem auto;

    h2{
        text-align: center;
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    p{
        /* text-align: center;
        font-size: 0.8em;
        color: #473E66; */
    }

    .reviewsContainer{
        display: flex;

    }

    article{
        /* width: 40%; */
        background: #E9DCC9;
        padding: 2rem;
        /* border: 1px solid #BD83B8; */
        border-radius: 0.5rem;
    }

    h4{
        margin-bottom: 0.6rem;
    }

    .profile{
        display: flex;
        margin-top: 0.6rem;
        gap: 0.6rem;
        align-items: center;
    }

    .profile img{
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
    }

    img{ 
        width: 10rem; 
    }
`;