import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
    display:flex;
    position: fixed;
    align-items:center;
    justify-content:center;
    height:100vh;
    width: calc(100% - 2*${(props)=>props.Margin});
    top:0;
    gap:${(props)=>props.Gap};

`
const Column = styled.div`
    background:rgba(100,0,0,0.4);
    height:100%;
    width:100%;
`

function Grid(props) {
    let colums = []
    for (let i = 0; i < props.Columns; i++) {
        colums.push(<Column ></Column>)
    }
    return(
        <Container Gap={props.Gap} Margin={props.Margin}>
            
            {colums}
            
        </Container>
    )
}
export default Grid