import styled from 'styled-components';

export const Wrapper = styled.div`
    /* display: flex;
    justfy-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid #BD83B8;
    border-radius: 20px;
    height: 100% */

    .wrapper{
    /* display: flex;
    justfy-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid #BD83B8;
    border-radius: 20px;
    height: 100% */
    }
    button{
        /* border: red 20px; */
        border-radius: 20px 20px 20px 20px;
    }

    button:hover{
        background: #BD83B8;
        border-radius: 0 0 20px 20px;

    }

    p{
        color: #473E66;
    }

    .add:hover{
        color: #ffff;
    }

    img{
        /* max-height: 5rem; */
        width: 100%;
        height: 10rem;
        object-fit: cover;
        border-radius: 20px 20px 0 0;
    }

    div{
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%;
    }
`;