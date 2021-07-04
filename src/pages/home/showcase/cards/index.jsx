import  dog from '../../../../assets/dog.jpg'
import { StyledCard, CardText, CardStats} from './styles'
import {IoMdMale, IoMdFemale, } from 'react-icons/io'
import { pics, Default} from '../../../../assets/pics'
export function Card (props){

    var petPicture = pics.filter((picture)=>{
        if (picture.code ===props.id){
            console.log('pictureObject',picture)
            return picture;
        }
    })
    if (petPicture.length==0){
        petPicture = Default;
    }
    return(
        <StyledCard>
            <div 
                className="card__image"
                style={{backgroundSize:'cover', backgroundImage:`url(${petPicture[0].pic})`}}>
            </div>
            <CardText>
                <h2>{props.name}</h2>
                <span className="breed">{props.breed}</span>
                <p>{props.description}</p>
            </CardText>
            <CardStats>
                <div class="card__stat border">
                    <div class="value"><i class="fas fa-dog"></i></div>
                    <div class="type">{props.type=='dog'?'cachorro':props.type=='cat'?'gato':''}</div>
                </div>
                <div class="card__stat">
                    <div class="value"><i class="fas fa-mars"></i>
                        {props.sex==='M'? <IoMdMale/>:props.sex==='F'?<IoMdFemale/>:""}   
                    </div>
                    <div class="type">
                    {props.sex==='M'? 'Macho':props.sex==='F'?'Fêmea':""}
                    </div>
                </div>
            </CardStats>
        </StyledCard>
    )
}