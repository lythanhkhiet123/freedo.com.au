import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Menu() {
    return (

       
            <ul className="menu-links">
                <Link to='/secondPage'>
                    <li>Vic</li>
                </Link>
                <Link to='/secondPage'>
                    <li>NSW</li>
                </Link>
                <Link to='/secondPage'>
                    <li>Queensland</li>
                </Link>
                <Link to='/secondPage'>
                    <li>Perth</li>
                </Link>
            </ul>
      

    );
}

export default Menu;
