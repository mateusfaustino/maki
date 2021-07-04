import {Card} from './showcase/cards/index'
import styled from "styled-components"
import {Showcase} from './showcase/styles'
import { database} from '../../services/firebase'
import React,{useEffect, useState} from "react";
import Spacing from '../../components/styleguide/atoms/spacing';
const spacing = new Spacing(7,'16px','10vw')     
const Container = styled.div`
    display:flex;
    align-items:stretch;
    height:100vh;
    padding:0 ${spacing.margin};
    margin-top: 48px;

    
`

export const Home = ()=>{
    const [documents, setDocuments] = useState([]);
    useEffect(() => {
        database.collection('pets').get().then((snapshot)=>{
            let arr = []
            snapshot.docs.map((doc) =>{
                arr.push({ 
                    id: doc.id,
                    name: doc.data().name,
                    sex: doc.data().sex,
                    breed: doc.data().breed,
                    description: doc.data().description,
                    type : doc.data().type

                })
            });
            setDocuments(arr)
            console.log("sex: ", documents);
        })
    }, [database])
    return(
        <Container>
            <Showcase>
                {
                    documents.map((document)=>{
                        return(
                            <Card
                                key={document.id}
                                name={document.name}
                                breed={document.breed}
                                description={document.description} 
                                sex={document.sex}
                                type={document.type}
                                id={document.id}
                            />
                        )
                    })
                }
            </Showcase>
        </Container>
    )
}
     
