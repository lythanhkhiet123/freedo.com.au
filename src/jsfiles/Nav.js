import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
       
        <nav>
            <ul className="nav-links">
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/secondPage'>
                    <li>Second page</li>
                </Link>
                <Link to='/thirdPage'>
                    <li>Third page</li>
                </Link>
                <Link to='/secondPage'>
                    <li>Fourth page</li>
                </Link>
            </ul>
        </nav>
      
            );
}

export default Nav;
