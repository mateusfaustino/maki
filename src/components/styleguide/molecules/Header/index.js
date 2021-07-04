import React,{useState} from 'react';
import { FaBars} from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import Logo from "./Logo"
import Menu from "./Menu"
import styled from 'styled-components';
import AppBar from '../../atoms/appBar'; 
import Spacing from '../../atoms/spacing';
const spacing = new Spacing(7,'16px','10vw')

const Nav= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding:4px ${spacing.margin};
right:0;
.nav__icon{
    height:auto ;
    width: 32px;
    max-width:40px;
    
    &.nav__close{
        display:${props => props.icon==='close' ? 'block' : 'none' } ;
    }
    &.nav__bars{
        display:${props => props.icon==='open' ? 'block' : 'none' } ;
    }
    &:hover{
        cursor: pointer;
    }
}

@media screen and (min-width: 755px) {

    .nav__icon {
        display: none !important;
    }
    

}

`
const Navbar = (props) => {

   const [isActive,setIsActive]=useState(false);
    return (
        <AppBar color='primary'>
            <Nav icon={isActive? 'close': 'open'}>
                <Logo isActive={isActive} setIsActive={()=>setIsActive(false)}/>
                <Menu appLinks={props.appLinks} isActive={isActive} setIsActive={()=>setIsActive(false)}/>
                <MdClose onClick={()=>setIsActive(!isActive)} className='nav__icon nav__close'/>
                <FaBars onClick={()=>setIsActive(!isActive)} className='nav__icon nav__bars'/>
            </Nav>
        </AppBar>
    )
}

export default Navbar
