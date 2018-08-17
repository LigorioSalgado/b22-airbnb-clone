import React, { Component } from 'react';


class Navbar extends Component {

   

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a  className="navbar-brand" href="#">Airbnb Clone</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapseAirbnb" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
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
                            <a className="btn btn-success">Sign Up</a>
                        </li>
                    </ul>

                </div>

            </nav>
        )


    }



}

export default Navbar;