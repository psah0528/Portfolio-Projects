import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import './Navbar.css';

const Navbar = () => {

  return (
    <div className="main">
    <div className='navbar'>
     <img src={logo} alt=""  className='nav-logo'/>
     <ul  className='nav-menu'> 
     <ul>
        <li>
          <Link to="/hero">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/mywork">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
       </ul>

     <div className="nav-connect">Connect With Me</div>
    </div>     
    </div> 
  )
}

export default Navbar