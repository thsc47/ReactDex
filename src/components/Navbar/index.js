import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import Navbackground from '../../assets/images/navbackground.gif'
import  styled  from "styled-components";

const Titulo = styled.h1`
    font-family: 'Pokemon Solid';
`;

const About = styled.h2`
font-family: 'Pokemon Solid';
`;

const Navbar = () => {
    return (
        <>
        <nav className='nav-bar'>
            <img className='nav-background' src={Navbackground} alt='logo'/>                   
        </nav>
       
        <div className='nav-link'>
            <Link to='/home'><Titulo>ReactDex</Titulo></Link>            
            <Link to='/about'><About>About us</About></Link> 
        </div>
        </>
    )        
    
}

export default Navbar