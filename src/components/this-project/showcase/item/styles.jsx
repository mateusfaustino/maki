import styled from "styled-components"
import Spacing from '../../../styleguide/atoms/spacing';
import typography from '../../../styleguide/atoms/typography'
const spacing = new Spacing(7,'16px','10vw')

export const StyledItem = styled.li`
    display:flex;
    width:100%;
    border-bottom: 1px #000 solid;
    padding:8px ${spacing.margin}; 
`
export const StyledTitle = styled.div`
    ${typography.header3()}
    font-weight:bold;

`
