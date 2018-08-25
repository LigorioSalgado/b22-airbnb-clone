import React, { Component } from 'react'
import Jumbotron from '../Jumbotron/Jumbotron';
import PropiedadesList from '../PropiedadesList/PropiedadesList'


class Home extends Component{


    render(){
        return(
            <div className="container-fluid" >
                <Jumbotron/>
                <PropiedadesList/>
            </div>

        )

    }
}

export default Home;