import styled from "styled-components";
import { Avatar as MuiAvatar } from "@material-ui/core";

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    margin-bottom:32px;
`
const UserName = styled.h2`

`
export function Avatar (props){
    return(
       <Container>
           <MuiAvatar src={props.image}>

           </MuiAvatar>
           <UserName>
               {props.userName}
           </UserName>
       </Container> 
    )
}