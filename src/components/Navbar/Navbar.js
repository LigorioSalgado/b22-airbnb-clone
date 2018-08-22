import React, { Component } from 'react';
import './navbar.scss';
import isAuthenticated from '../../resolvers/isAuthenticated';
import payload from '../../resolvers/payload';
import {Link} from 'react-router-dom';

class Navbar extends Component {

   
    checkAuthenticatedUser = () => {
       if(true){
           return(
               <div>
                    <li className="nav-item">
                        <Link className="nav-link">Logut</Link>
                    </li>
                     <li className="nav-item">
                        <Link className="nav-link">
                            Hola {payload().username} !!!
                        </Link>
                     </li>
           
               </div>
           ) 
       }else{
            return(
                <div>
                    <li className="nav-item">
                        <Link className="nav-link">Login</Link>
                    </li>
                     <li className="nav-item">
                        <Link className="btn btn-signup">Signup</Link>
                     </li>
           
               </div>
            )
        
       }
    }


    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a  className="navbar-brand" href="#">Airbnb Clone</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseAirbnb" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapseAirbnb">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link">Propiedades</a>
                        </li>
                        <li className="nav-item"> 
                            <a className="nav-link">Login</a>
                        </li>
                        <li className="nav-item"> 
                            <a className="btn btn-signup">Sign Up</a>
                        </li>
                    </ul>

                </div>

            </nav>
        )


    }



}

export default Navbar;