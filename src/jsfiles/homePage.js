import React from 'react';
import '../App.css';
import Menu from './Menu';
import Test3 from '../listItems/Test3';
import Search from './Search';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';

function homePage() {


    return (

        <Router>

            <div className="App">
                <Search />
                <Menu />

               
                <Test3 />





            </div>
        </Router>
    );
}

export default homePage;
