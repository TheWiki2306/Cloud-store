import styled from 'styled-components';

export const Wrapper = styled.div`
    /* display: flex;
    justfy-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 1px solid #BD83B8;
    border-radius: 20px;
    height: 100% */

    width: 100%;

    .wrapperContainer{
        /* height: 100%; */
    }

    button{
        /* border: red 20px; */
        border-radius: 20px 20px 20px 20px;
        padding: 1rem 7rem;
        border: 1px #BD83B8 solid;
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

    h3{
        /* margin-bottom: 5rem; */
    }

    div{
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%;
    }
`;