import styled from "styled-components";
import Button from '../../../components/styleguide/molecules/buttons'
import { useState } from "react";
import {database} from '../../../services/firebase'
import {useHistory} from 'react-router-dom'

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
    const [petName, setPetName] = useState('')
    const [petType, setPetType] = useState('')
    const [petSex, setPetSex] = useState('')
    const [petDescription, setPetDescription] = useState('')
    const [petBreed, setPetBreed] = useState('')
    async function handleSavePet(event){

        event.preventDefault()
        if(petType.trim()===''){
            alert("Por favor, Selecione o tipo do Pet")
            return
        }
        if(petSex.trim()===''){
            alert("Por favor, Selecione o Sexo do Pet")
            return
        }
        if(petName.trim()===''){
            alert("O campo nome não pode ficar vazio")
            return
        }
        database.collection("pets").doc().set({
            name: petName,
            type: petType,
            sex: petSex,
            breed: petBreed,
            description: petDescription           
        })
        .then(() => {
            console.log("Document successfully written!");
            history.push("/");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        
        console.log("Name: ", petName);
        console.log("Descriprion: ", petDescription);
        console.log("Sex: ", petSex);
        console.log("Breed: ",petBreed );
        console.log("Type: ",petType );
        
    }
    return(
        <StyledForm onSubmit={handleSavePet}>
            <FormControl component="fieldset">
                <FormLabel component="legend">O Pet é {petType}</FormLabel>
                <RadioGroup onChange={(e)=>setPetType(e.target.value)} aria-label="O Pet é:" name="type" >
                    <FormControlLabel  value="dog" control={<Radio />} label="Cachorro" />
                    <FormControlLabel value="cat" control={<Radio />} label="Gato" />
                </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
                <FormLabel component="legend">Sexo:({petSex})</FormLabel>
                <RadioGroup onChange={(e)=>setPetSex(e.target.value)} aria-label="O Pet é:" name="sex" >
                    <FormControlLabel value="F" control={<Radio />} label="Fêmea" />
                    <FormControlLabel value="M" control={<Radio />} label="Macho" />
                </RadioGroup>
            </FormControl>
            <TextField onChange={(e)=>setPetName(e.target.value)} id="name" label="Nome" variant="outlined" />
            <TextField onChange={(e)=>setPetBreed(e.target.value)} id="breed"  label="Raça ou Cores" variant="outlined" />
            <TextField onChange={(e)=>setPetDescription(e.target.value)} multiline id="description" label="Descrição" variant="outlined" />
            <Button type='submit'>Salvar</Button>
        </StyledForm>
    )
}