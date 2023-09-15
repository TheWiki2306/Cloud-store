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

    @media(max-width: ${({theme}) => theme.laptop}){
        .categories{
            /* width: 90%; */
            /* width: 100%; */
            /* margin: 0; */
        }

    }

    @media(max-width: ${({theme}) => theme.tabletprime}){
        
        .categories{
            /* width: 50%; */
            gap: 2rem;
            margin: 0;
        }

        article{
            /* width: 100%; */
            /* margin: 0 auto; */
        }
    }

    @media(max-width: ${({theme}) => theme.tableprime2}){
        .categories{
            /* width: 80%;/ */
            gap: 1rem;
            /* margin: 0 auto; */
        }
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        .categories{
            /* width: 50%; */
            grid-template-columns: repeat(2, 1fr);
            /* gap:0; */
            width: 100%;
            margin: 0 auto;
            /* justify-content: none; */
            /* flex: 2; */
            /* gap: 1rem; */
            /* margin: 0 auto; */
        }

        .article{
            /* padding: 0; */
        }
    }

    @media(max-width: ${({theme}) => theme.mobileprime}){

        margin-bottom: 3rem;
    }

    @media(max-width: ${({theme}) => theme.reponsivemobile}){

        padding: 0;
        padding-top: 2rem;

        .categories{
            width: 90%;
            margin: 0 auto;
        }
      
    }
`; 