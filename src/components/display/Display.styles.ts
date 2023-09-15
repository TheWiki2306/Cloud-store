import styled from "styled-components";


export const Container = styled.div`   

    margin-top: 7rem;
    background: #BD83B8;
    padding: 1.5rem;


    p{
        font-size: 2.5rem;
        font-weight: bold;
        color: #ffff;
        text-align: center;
    }

    .icon{
        width: 5%;
        height: 2rem;
        fill: #ffff;
        
    }

    @media(max-width: ${({theme}) => theme.laptop}){
        /* width: 90%; */
        /* margin: auto; */
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        /* width: 100%;
        margin: o auto; */
    }

    
    
`;