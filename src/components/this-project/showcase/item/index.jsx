import { StyledItem, StyledTitle} from './styles'
import { Link } from 'react-router-dom'
export function ShowcaseItem (props){

    return(
        <StyledItem>
            <Link to={props.link} >
                <StyledTitle>
                    {props.title}
                </StyledTitle>
            </Link>
        </StyledItem>
    )
}