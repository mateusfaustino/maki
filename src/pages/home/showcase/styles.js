import styled from 'styled-components'

export const Showcase = styled.ul`
    display: grid;
    grid-template-columns: 100%;
    gap: 16px;
    justify-content: center;
    height: fit-content;

    @media (min-width: 360px){
        
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        justify-content: center;
    }
    @media (min-width: 668px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 16px;
        justify-content: center;
    }
` 


