import React from 'react';
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <>
        <nav className='nav-bar'>
            <img className='nav-background' src='../images/navbackground.gif' alt='logo'/>                   
        </nav>
       
        <div className='nav-link'>
            <Link to='/home'><h1>ReactDex</h1></Link>            
            <Link to='/about'>About us</Link> 
        </div>
        </>
    )        
    
}

export default Navbar