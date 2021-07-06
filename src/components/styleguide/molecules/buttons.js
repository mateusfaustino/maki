import React from 'react'
import MuiButton from '@material-ui/core/Button'
import {styled} from '@material-ui/core/styles'
import {palette} from '../atoms/colors'

const StyledTextButton = styled(MuiButton)({
    // Styles applied to the root element if variant="text".
    '&.MuiButton-text':{
        
    },
    //Styles applied to the root element if variant="text" and color="primary".
    '&.MuiButton-textPrimary':{
        '&.MuiButton-textSecondary':{
            color:palette.primary.main,
            '&:hover':{
            color:palette.primary.dark,
            }
        },    
    },
    //Styles applied to the root element if variant="text" and color="secondary".    
    '&.MuiButton-textSecondary':{
        color:palette.secondary.main,
        '&:hover':{
        color:palette.secondary.dark,
        }
    },
    //Styles applied to the root element if disableElevation={true}.
    '&.MuiButton-disableElevation':{

    },
    //	Pseudo-class applied to the ButtonBase root element if the button is keyboard focused.
    '&.Mui-focusVisible':{

    },
    //Pseudo-class applied to the root element if disabled={true}
    '&.Mui-disabled':{

    },
    //Styles applied to the root element if color="inherit".
    '&.MuiButton-colorInherit':{

    },
    //Styles applied to the root element if size="small" and variant="text".
    '&.MuiButton-textSizeSmall':{

    },
    //Styles applied to the root element if size="large" and variant="text".
    '&.MuiButton-textSizeLarge':{

    },
})
const StyledOutlinedButton = styled(MuiButton)({
    // Styles applied to the root element if variant="outlined".
    '&.MuiButton-outlined':{

    },
    //Styles applied to the root element if variant="outlined" and color="primary".
    '&.MuiButton-outlinedPrimary':{
        color:palette.primary.main,
        'border-color':palette.primary.main,
        '&:hover':{
            color:palette.primary.dark,
            'border-color':palette.primary.dark,
        }
    },
    //Styles applied to the root element if variant="outlined" and color="secondary".
    '&.MuiButton-outlinedSecondary':{
        color:palette.secondary.main,
        'border-color':palette.secondary.main,
        '&:hover':{
            color:palette.secondary.dark,
            'border-color':palette.secondary.dark,
        }
    },
    //Styles applied to the root element if disableElevation={true}.
    '&.MuiButton-disableElevation':{

    },
    //	Pseudo-class applied to the ButtonBase root element if the button is keyboard focused.
    '&.Mui-focusVisible':{

    },
    //Pseudo-class applied to the root element if disabled={true}
    '&.Mui-disabled':{

    },
    //Styles applied to the root element if color="inherit".
    '&.MuiButton-colorInherit':{

    },
    //Styles applied to the root element if size="small" and variant="outlined".
    '&.MuiButton-outlinedSizeSmall':{

    },
    //Styles applied to the root element if size="large" and variant="outlined".
    '&.MuiButton-outlinedSizeLarge':{

    },
})
const StyledContainedButton = styled(MuiButton)({


    //Styles applied to the root element if variant="contained".
    '&.MuiButton-contained':{

    },
    //Styles applied to the root element if variant="contained" and color="primary".
    '&.MuiButton-containedPrimary':{
        background:palette.primary.main,
        color:palette.primary.onMainText,
        '&:hover':{
            background:palette.primary.dark,
            color:palette.primary.onDarkText,
        }
    },
    //Styles applied to the root element if variant="contained" and color="secondary".
    '&.MuiButton-containedSecondary':{
        background:palette.secondary.main,
        color:palette.secondary.onMainText,
        '&:hover':{
            background:palette.secondary.dark,
            color:palette.secondary.onDarkText,
        }
    },
    //Styles applied to the root element if disableElevation={true}.
    '&.MuiButton-disableElevation':{

    },
    //	Pseudo-class applied to the ButtonBase root element if the button is keyboard focused.
    '&.Mui-focusVisible':{

    },
    //Pseudo-class applied to the root element if disabled={true}
    '&.Mui-disabled':{

    },
    //Styles applied to the root element if color="inherit".
    '&.MuiButton-colorInherit':{

    },
    
    
    //Styles applied to the root element if size="small" and variant="contained".
    '&.MuiButton-containedSizeSmall':{

    },
    //Styles applied to the root element if size="large" and variant="contained".
    '&.MuiButton-containedSizeLarge':{

    },
    //	Styles applied to the root element if size="small".
    '&.MuiButton-sizeSmall':{
        
    },
    //Styles applied to the root element if size="large".
    '&.MuiButton-sizeLarge':{

    },
    //Styles applied to the root element if fullWidth={true}.
    '&.MuiButton-fullWidth':{

    },
    //Styles applied to the startIcon element if supplied.
    '&.MuiButton-startIcon':{
        
    },
    //Styles applied to the endIcon element if supplied.
    '&.MuiButton-endIcon':{

    },
    //	Styles applied to the icon element if supplied and size="small".
    '&.MuiButton-iconSizeSmall':{

    },
    //Styles applied to the icon element if supplied and size="medium".
    '&.MuiButton-iconSizeMedium':{
        
    },
    //Styles applied to the icon element if supplied and size="large".
    '&.MuiButton-iconSizeLarge':{

    },
})
const ContainedButton = (props)=>{
    return(
        <StyledContainedButton variant='contained'
            startIcon={props.startIcon}
            endIcon={props.endIcon}
            disabled={props.disabled}
            color={props.color?props.color:'primary'}
            size={props.size?props.size:'medium'}
            onClick={props.onClick}
            type={props.type}
            className={props.className}
        >
            {props.children}
        </StyledContainedButton>
    )
} 
export const OutlinedButton = (props)=>{
    return(
        <StyledOutlinedButton variant='outlined'
            startIcon={props.startIcon}
            endIcon={props.endIcon}
            disabled={props.disabled}
            color={props.color?props.color:'primary'}
            size={props.size?props.size:'medium'}
        >
            {props.children}
        </StyledOutlinedButton>
    )
} 
export const TextButton = (props)=>{
    return(
        <StyledTextButton variant='text'
            startIcon={props.startIcon}
            endIcon={props.endIcon}
            disabled={props.disabled}
            color={props.color?props.color:'primary'}
            size={props.size?props.size:'medium'}
            type={props.type}
            
        >
            {props.children}
        </StyledTextButton>
    )
} 

export default ContainedButton