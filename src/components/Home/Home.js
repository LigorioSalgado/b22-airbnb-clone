import React, { Component } from 'react'
import Jumbotron from '../Jumbotron/Jumbotron';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import { unlink } from 'fs';

const GET_HOUSES = gql`
query{
    allPropiedades{
        _id,
        nombre,
        descripcion_corta,
        pais
    }
}
`;


class Home extends Component{

   
    renderProperties = () => (
            <Query query={GET_HOUSES}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;
                    if (data) console.log(data.allPropiedades)

            return (
                <ul>
                    {data.allPropiedades.map((propiedad)=>(
                        <li>{propiedad.nombre}</li>
                    ))}
                </ul>
                
            );
            }}
            </Query>
        )

    


    render(){
        
        
        return(
            <div className="container-fluid" >
                <Jumbotron/>
                {this.renderProperties()}
            </div>

        )

    }
}

export default Home;