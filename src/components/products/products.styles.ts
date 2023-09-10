import styled from 'styled-components';
import IconButton from "@material-ui/core/IconButton";

export const Container = styled.div`
    /* margin: 40px; */
    /* background: : lightblue; */
    color: #473E66;
    width: 90%;
    /* height: 100% */
    margin: 0 auto;
    margin-top: 3rem;

    .itemsContainer{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        /* gap: 1rem; */
        /* width: 100%; */
    }
`;

export const StyledButton = styled(IconButton)`
    position: fixed;
    z-index: 100;
    right: 20px;
    top: 20px;

`