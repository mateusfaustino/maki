import styled from "styled-components"
import { database} from '../../services/firebase'
import Button from '../../components/styleguide/molecules/buttons' 
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Showcase } from "../../components/this-project/showcase/showcase";
import React,{useEffect, useState} from "react";
import { ShowcaseItem as Item } from "../../components/this-project/showcase/item";
import Spacing from '../../components/styleguide/atoms/spacing';
const spacing = new Spacing(7,'16px','10vw')   
const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    height:100vh;
    margin-top: 48px;
    a.study{
        margin:0 ${spacing.margin} 40px ${spacing.margin};
        width:${spacing.container};
        button{
            width:100%;

        }

    } 
`

export const Deck = ()=>{
    const [documents, setDocuments] = useState([]);
    let { id } = useParams();
    useEffect(() => {
        database.collection(`deck/${id}/cards`).orderBy('word').get().then((snapshot)=>{
            let arr = []
            snapshot.docs.map((doc) =>{
                arr.push({ 
                    id: doc.id,
                    word: doc.data().word,
                    scores: doc.data().score
                })
            });
            setDocuments(arr)
        })
    }, [database])
    return(
        <Container >
            <h1>
                {id}
            </h1>
            <Link className='study' to={`/study/${id}`}>
                <Button color='secondary'>Study deck</Button>
            </Link>

            <Showcase>
            {
                documents.map((document)=>{
                    return(
                        <Item
                            title={document.word}
                            scores={document.scores}
                        />
                            
                    )
                })
            }
            </Showcase>
            
        </Container>
            

    )
}
     
