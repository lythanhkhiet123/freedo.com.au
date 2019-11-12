import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
       
        <nav>
            <ul className="nav-links">
                <Link to='/homePage'>
                    <li><strong>Home</strong></li>
                </Link>
                <Link to='/Aboutus'>
                            <li><strong>About us</strong></li>
                </Link>
                <Link to='/Advertisingbusiness'>
                                    <li><strong>Advertising your business</strong></li>
                </Link>
                <Link to='/Contactus'>
                                            <li><strong>Contact us</strong></li>
                </Link>
            </ul>
        </nav>
      
            );
}

export default Nav;
