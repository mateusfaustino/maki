import styled from "styled-components";
import typographies from "../../components/styleguide/atoms/typography";
import shadows from "../../components/styleguide/atoms/shadows";
import { palette } from "../../components/styleguide/atoms/colors";
import Spacing from '../../components/styleguide/atoms/spacing';

const spacing = new Spacing(7,'16px','10vw')   
export const Container = styled.div`
    display:flex;
    align-items:center;
    justify-content:flex-start;
    flex-direction:column;
    height:100vh;  
    margin: 90px ${spacing.margin} 0 ${spacing.margin};
    &>button{
        width:100%;
        display:${props=>props.showAnswer?'none':'flex'};
    }  
`
export const Front = styled.div`
    box-shadow:${shadows.shadow_3dp};
    padding: 8px;
    width:100%;  
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:flex-start;
`
export const Back = styled.div`
    display:${props=>props.showAnswer?'flex':'none'};
    box-shadow:${shadows.shadow_3dp};
    padding: 8px;
    width:100%;      
    align-items:center;
    flex-direction:column;
    justify-content:flex-start;
`
export const Word = styled.h1`
    ${typographies.header0}
`
export const Pronunciation = styled.h4`
    ${typographies.header4}
    color:#909090;
`
export const Control = styled.div`
    display:${props=>props.showAnswer?'flex':'none'};
    align-items:center;
    justify-content:space-around;
    position:fixed;
    bottom:0;
    width:100%;
    ${typographies.header4}
    padding:16px 0;
    .easy{
        background:${palette.sucess.main};
        color:${palette.sucess.onMainText};
        &:hover{
            background:${palette.sucess.dark};
            color:${palette.sucess.onDarkText};
        }
    }
    .hard{
        background:${palette.error.main};
        color:${palette.error.onMainText};
        &:hover{
            background:${palette.error.dark};
            color:${palette.error.onDarkText};
        }
    }
`
