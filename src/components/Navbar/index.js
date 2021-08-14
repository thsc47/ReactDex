import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import Navbackground from '../../assets/images/navbackground.gif'


const Navbar = () => {
    return (
        <>
        <nav className='nav-bar'>
            <img className='nav-background' src={Navbackground} alt='logo'/>                   
        </nav>
       
        <div className='nav-link'>
            <Link to='/home'><h1>ReactDex</h1></Link>            
            <Link to='/about'><h2>About us</h2></Link> 
        </div>
        </>
    )        
    
}

export default Navbar