import { Container, Word, Pronunciation, Front, Back, Control} from './styles'
import { useParams,useHistory } from "react-router"
import {Showcase} from '../../components/this-project/showcase/showcase'
import { ShowcaseItem as Item} from '../../components/this-project/showcase/item'
import { database, firebase} from '../../services/firebase'
import React,{useEffect, useState} from "react";
import Button, {TextButton} from '../../components/styleguide/molecules/buttons'
import Spacing from '../../components/styleguide/atoms/spacing';

const spacing = new Spacing(7,'16px','10vw')
 

export const Study = (props)=>{
    const [documents, setDocuments] = useState([]); 
    const [showAnswer, setShowAnswer] = useState(false);
    let {id}=useParams()
    let history  = useHistory()
    const collection = database.collection(`deck/${id}/cards`)
    function updateScores(num){
        collection.doc(documents[0].id).update({
            score:firebase.firestore.FieldValue.increment(num)
        }).then(()=>{
            console.log('foi incrementado com sucesso');
            setShowAnswer(false);
            consultDatabase();
        }).catch((error)=>{
            console.log(error);
        })
    }
    function consultDatabase(){
        collection.orderBy('score').limit(1).get().then((snapshot)=>{
            let arr = []
            snapshot.docs.map((doc) =>{
                arr.push({ 
                    id: doc.id,
                    word: doc.data().word,
                    scores: doc.data().score,
                    pronunciation: doc.data().pronunciation,
                    translation:doc.data().translation
        
                })
            });
            setDocuments(arr)
            console.log("colsulta");
        })
    }
    useEffect(() => {
        consultDatabase()
    }, [database])
    return(
        <>
            {
                documents.map((document)=>{
                    return(
                        <Container showAnswer={showAnswer}>
                            <Front>
                                <Word>{document.word}</Word>
                                <Pronunciation>({document.pronunciation})</Pronunciation>
                            </Front>
                            <Button onClick={()=>setShowAnswer(true)}>Show Answer</Button>
                            <Back showAnswer={showAnswer}>
                                <Word>{document.translation}</Word>
                            </Back>
                            <Control showAnswer={showAnswer}>
                                <Button className='easy'onClick={()=>updateScores(5)}>easy</Button>
                                <Button onClick={()=>updateScores(2)}>normal</Button>
                                <Button onClick={()=>updateScores(1)} className='hard'>hard</Button>
                            </Control>
                        </Container>
                    )
                })
            }
            
        </>
    )
}
     
