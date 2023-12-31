import styled from 'styled-components';

export const Container = styled.div`

    width: 100%;
    margin: auto;
    background: #BD83B8;
    padding-top: 3rem;
    text-align: center;
    color: #E9DCC9;

    h2{
        font-size: 2em;
    }

    h5{
        font-size: 1.2em;
    }

    p{
        margin-top: 5rem;
        color: #E9DCC9;
    }

    .links{
        display: flex;
        gap: 2rem; 
        width: 10%;
        margin: 0 auto;
        margin-top: 3rem; 
    }

    .socials{
        width: 1.2rem;
        height: 1rem;
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        /* width: 70%; */
        margin: 0 auto;
    
        p{
            /* width: 50%; */
            display: none;
        }
        
        .links{
            margin-top: 5rem;
        }
    }

    @media(max-width: ${({theme}) => theme.mobileprime}){
        
        .links{
            width: 20%;
        }
    }

    @media(max-width: ${({theme}) => theme.reponsivemobile}){
        /* width: 90%; */
        h2{
            width: 90%;
            margin: 0 auto;
        }

        .links{
            width: 30%;
        }
    }
`;