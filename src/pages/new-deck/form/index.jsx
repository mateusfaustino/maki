import styled from "styled-components";
import Button from '../../../components/styleguide/molecules/buttons'
import { useState } from "react";
import {database} from '../../../services/firebase'
import {useHistory, useParams} from 'react-router-dom'

import 'firebase/database'
import { 
    FormControl,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    Radio,
    TextField
} from '@material-ui/core'

const StyledForm = styled.form`
    display:flex;
    flex-direction:column;
    .MuiFormControl-root{
        margin-bottom:16px;  
    }
    
`
export function Form (){
    let history = useHistory();
    const [name, setName] = useState('')
    async function handleSavePet(event){

        event.preventDefault()

        if(name.trim()===''){
            alert("O campo Name não pode ficar vazio")
            return
        }
        database.collection(`deck`).doc().set({
            name: name,
        })
        .then(() => {
            console.log("Document successfully written!");
            history.push(`/`);
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        
    }
    return(
        <StyledForm onSubmit={handleSavePet}>
            <TextField onChange={(e)=>setName(e.target.value)} id="name" label="Name" variant="outlined" />
            <Button type='submit'>Save</Button>
        </StyledForm>
    )
}