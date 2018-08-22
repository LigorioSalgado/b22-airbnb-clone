import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';

class Routes extends Component {


    render(){
      return(  
        <Router>
            <main>
                <Navbar/>
                <Route exact path='/signup' component={Signup}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/' component={Home}/>
                <Route exact path='/logout' component={Logout}/>



            </main>
        </Router>
        )
    }
}

export default Routes;