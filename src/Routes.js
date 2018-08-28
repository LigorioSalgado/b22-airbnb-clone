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
import DetailPropiedad from './components/DetailPropiedad/DetailPropiedad';
import FormPropiedad from './components/FormPropiedad/FormPropiedad';
import {ApolloProvider} from 'react-apollo';
import client from './graphql';

class Routes extends Component {


    render(){
      return(  
        <Router>
            <ApolloProvider client={client}>
            <main>
                <Navbar/>
                <Route exact path='/signup' component={Signup}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/' component={Home}/>
                <Route exact path='/logout' component={Logout}/>
                <Route exact path='/propiedad/:id' component={DetailPropiedad}/>
                <Route exact path='/propiedades/new' component={FormPropiedad}/>

            </main>
            </ApolloProvider>
        </Router>
        )
    }
}

export default Routes;