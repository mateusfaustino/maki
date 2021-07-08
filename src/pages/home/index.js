import styled from "styled-components"
import {Showcase} from '../../components/this-project/showcase/showcase'
import { ShowcaseItem as Item} from '../../components/this-project/showcase/item'
import { database} from '../../services/firebase'
import React,{useEffect, useState} from "react";
import Spacing from '../../components/styleguide/atoms/spacing';
import { Link } from "react-router-dom";
import {MdAdd} from 'react-icons/md'
import { Fab } from '@material-ui/core';

const spacing = new Spacing(7,'16px','10vw')
 
const Container = styled.div`
    display:flex;
    align-items:stretch;
    height:100vh;
    margin-top: 48px;
    a.add{
        position:fixed;
        right:${spacing.margin};
        bottom:32px;
    }
`

export const Home = ()=>{
    const [documents, setDocuments] = useState([]);
    useEffect(() => {
        database.collection('deck').get().then((snapshot)=>{
            let arr = []
            snapshot.docs.map((doc) =>{
                arr.push({ 
                    id: doc.id,
                    name: doc.data().name
                })
            });
            setDocuments(arr)
        })
    }, [database])
    return(
        <Container>
            <Showcase>
                {
                    documents.map((document)=>{
                        return(
                            <Item
                                title={document.name}
                                id={document.id}
                                link={`/deck/${document.id}`}
                            />
                        )
                    })
                }
            </Showcase>
            <Link to={`/new-deck/`} className='add'>
                <Fab color="primary" aria-label="add">
                    <MdAdd />
                </Fab>
            </Link>
        </Container>
    )
}
     
