import { AppBar } from '@material-ui/core';
import {styled} from '@material-ui/core/styles'
import { palette } from './colors';
const StyledAppBar = styled(AppBar)({
    //Styles applied to the root element if color="primary".
    '&.MuiAppBar-colorPrimary':{
        background:palette.primary.main,
        color:palette.primary.onMainText,
    },
    //Styles applied to the root element if color="secondary".
    '&.MuiAppBar-colorSecondary':{
        background:palette.secondary.main,
        color:palette.secondary.onMainText,
    },

})

const appBar = (props)=>{
    return(
        <StyledAppBar 
            color={props.color}
            position={props.position}
            >{props.children}
        </StyledAppBar>
    )
}

export default appBar

