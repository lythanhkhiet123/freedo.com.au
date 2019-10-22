import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Menu from './Menu';
import Items from './listItems/Items';
import Test from './listItems/Pagination';
import Test3 from './listItems/Test3';
import Search from './Search';

import secondPage from './secondPage';
import Slideshow from './Slideshow';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  

    return (

        <Router>

            <div className="App">

                <Nav />
                <Slideshow />
                
                <Menu />
                <Search />
                <Test3 />
               
                <Route path="/secondPage" component={secondPage} />
          <secondPage />
    </div>
    </Router>
  );
}

export default App;
