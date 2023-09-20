import styled from 'styled-components';
import IconButton from "@material-ui/core/IconButton";

export const Container = styled.div`
    /* margin: 40px; */
    color: #473E66;
    margin-top: 5rem;

    /* [theme.breakpoints.down("md")]: {
  },
  [theme.breakpoints.down("sm")]: {
    
  },
  [theme.breakpoints.up("lg")]: {
   
  } */
    
    /* color: #BD83B8; */
    /* color: #F1916D; */
    
    .sectionOne{
        width: 100%;
        text-align: center;
        font-size: 2em;
        font-weight: bolder;
        
    }

    span{
        color: #BD83B8;
    }

    @media(max-width: ${({theme}) => theme.mobile}){
        .sectionOne{
            width: 70%;
            margin: 0 auto;
        }
    
    }

    @media(max-width: ${({theme}) => theme.reponsivemobile}){
        
        .sectionOne{
            width: 90%;
            margin: 0 auto;
            
            }
    }
`;

