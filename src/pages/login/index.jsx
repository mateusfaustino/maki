import styled from "styled-components"
import {Showcase} from '../../components/this-project/showcase/showcase'
import { ShowcaseItem as Item} from '../../components/this-project/showcase/item'
import { database} from '../../services/firebase'
import React,{useEffect ,useContext, useState} from "react";
import Spacing from '../../components/styleguide/atoms/spacing';
import { Link } from "react-router-dom";
import {MdAdd} from 'react-icons/md'
import { Fab } from '@material-ui/core';
import Button from '../../components/styleguide/molecules/buttons'
import { auth, firebase } from "../../services/firebase";
import { useHistory } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";
const spacing = new Spacing(7,'16px','10vw')
 
const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:100vh;
    margin-top: 48px;
`

export const Login = ()=>{
    const history = useHistory()
    const [documents, setDocuments] = useState([]);
    const {user,signinWithGoogle} = useContext(AuthContext)    
    
    return(
        <Container>
            <Button onClick={()=>signinWithGoogle()}>Login with Google</Button>
        </Container>
    )
}
     
