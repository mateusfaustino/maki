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
    let { id } = useParams();
    const [word, setWord] = useState('')
    const [petType, setPetType] = useState('')
    const [petSex, setPetSex] = useState('')
    const [translation, setTranslation] = useState('')
    const [pronunciation, setPronunciation] = useState('')
    async function handleSavePet(event){

        event.preventDefault()

        if(word.trim()===''){
            alert("O campo word não pode ficar vazio")
            return
        }
        database.collection(`deck/${id}/cards`).doc().set({
            word: word,
            pronunciation: pronunciation,
            translation: translation,
            score:0,
            factor:1,
            'current-phrase':0,

        })
        .then(() => {
            console.log("Document successfully written!");
            history.push(`/deck/${id}`);
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
        
    }
    return(
        <StyledForm onSubmit={handleSavePet}>
            <TextField onChange={(e)=>setWord(e.target.value)} id="word" label="Word" variant="outlined" />
            <TextField onChange={(e)=>setPronunciation(e.target.value)} id="pronunciation"  label="Pronunciation" variant="outlined" />
            <TextField onChange={(e)=>setTranslation(e.target.value)} multiline id="translation" label="Translation" variant="outlined" />
            <Button type='submit'>Salvar</Button>
        </StyledForm>
    )
}