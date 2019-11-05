import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './jsfiles/Nav';
import Menu from './jsfiles/Menu';
import Items from './listItems/Items';
import Test from './listItems/Pagination';
import Test3 from './listItems/Test3';
import Search from './jsfiles/Search';
import Footer from './jsfiles/Footer';
import secondPage from './jsfiles/secondPage';
import Slideshow from './jsfiles/Slideshow';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';

function App() {
  

    return (

        <Router>

            <div className="App">

                <Nav />
                <Slideshow />
                <Search />
                <Menu />
                
                
              
                <Test3 />
                <Footer />
                <Switch>
                    <Route path="./jsfiles/secondPage">
                        <secondPage />
                    </Route>
                    <Route path="./jsfiles/secondPage   ">
                        <secondPage />
                    </Route>
                   
                </Switch>


    </div>
    </Router>
  );
}

export default App;
