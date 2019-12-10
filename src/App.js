import React, { Component } from 'react';
import './App.css';
import Nav from './jsfiles/Nav';
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
import Description from './jsfiles/Description';



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {


    render()
    {
        return (

            <div className='App'>
                <Router>

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


                        <Route

                            path="/Description/:id,:title,:description,:text,:src"
                            component={Description} />

                        <Route path="/Cookie">
                            <Cookie />
                        </Route>
                        <Route path="/">
                            <Homepage />
                        </Route>




                    </Switch>
                    <Footer />
                </Router>

            </div>

        );
    }
  

    
}
export default App;
