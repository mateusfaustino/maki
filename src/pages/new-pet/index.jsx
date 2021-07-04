import atom from '../../components/styleguide/atoms'
import styled from 'styled-components'
import {Form} from './form'
import Spacing from '../../components/styleguide/atoms/spacing';
const spacing = new Spacing(7,'16px','10vw')

const Container = styled.div`
    margin-top: 48px;
    padding: 0 ${spacing.margin};

    .title{
        margin-bottom:16px;
        ${atom.typography.header1}
    }
`

export function NewPet (props){
    
    return(
        <Container>
            <div className='title'>
                Cadastre um novo Pet
            </div>
            <Form/>
        </Container>
    )
}