import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './jsfiles/Nav';
import Menu from './jsfiles/Menu';
import Items from './listItems/Items';
import Test3 from './listItems/Test3';
import Search from './jsfiles/Search';
import Footer from './jsfiles/Footer';
import Aboutus from './jsfiles/Aboutus';
import Advertisingbusiness from './jsfiles/Advertisingbusiness';
import Contactus from './jsfiles/Contactus'
import Slideshow from './jsfiles/Slideshow';
import Homepage from './jsfiles/homePage';
import Cookie from './jsfiles/Cookie';
import Help from './jsfiles/Help';
import Termofuse from './jsfiles/Termofuse';
import Privacy from './jsfiles/Privacy';





import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';

function App() {
  

    return (
        <div >
        <Router>
            <div class='App'>

                <Nav />
                <Slideshow />
                
                
              
              
                <Switch>
                    <Route path="/homePage">
                        <Homepage />
                    </Route>
                    <Route path="/Aboutus">
                        <Aboutus />
                    </Route>
                    <Route path="/Advertisingbusiness">
                        <Advertisingbusiness />
                    </Route>
                    <Route path="/Contactus">
                        <Contactus />
                    </Route>
                    <Route path="/Help">
                        <Help />
                    </Route>
                    <Route path="/Privacy">
                        <Privacy />
                    </Route>
                    <Route path="/Termofuse">
                        <Termofuse />
                    </Route>
                    <Route path="/Cookie">
                        <Cookie />
                    </Route>
                    <Route path="/">
                        <Homepage />
                    </Route>
                   


                   
                </Switch>
                <Footer />

  </div>
        </Router>
            </div>
  );
}

export default App;
