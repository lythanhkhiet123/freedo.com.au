import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
       
        <nav>
            <ul className="nav-links">
                <Link to='/homePage'>
                    <li>Home</li>
                </Link>
                <Link to='/Aboutus'>
                            <li>About us</li>
                </Link>
                <Link to='/Advertisingbusiness'>
                                    <li>Advertising your business</li>
                </Link>
                <Link to='/Contactus'>
                                            <li>Contact us</li>
                </Link>
                


            </ul>
        </nav>
      
            );
}

export default Nav;
