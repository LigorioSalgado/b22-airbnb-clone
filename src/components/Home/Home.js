import React, { Component } from 'react'
import Jumbotron from '../Jumbotron/Jumbotron';
import PropiedadesList from '../PropiedadesList/PropiedadesList'


class Home extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="container-fluid" >
                <Jumbotron/>
                <PropiedadesList history={this.props.history}/>
            </div>

        )

    }
}

export default Home;