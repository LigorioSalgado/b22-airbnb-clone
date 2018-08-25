import React, { Component } from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo'


const GET_HOUSE = gql`

    query HOUSE($id: ID!){
        singlePropiedad(id:$id){
            nombre,
            descripcion_larga,
            fotos,
            precio,
            calificacion{
                estrellas,
                comentarios
            },
            servicios{
                nombre,
                descripcion
            },
            caracteristicas{
                nombre,
                descripcion,
                numero
            },
            disponibilidad_inicial,
            disponibilidad_final,
            ubicacion,
            pais
        }

    }


`

class  DetailPropiedad extends  Component{

        constructor(props){
            super(props)

            this.state = {
                id:props.match.params.id
            }

        }


        render(){

            return (
                <Query query={GET_HOUSE}  variables={{id:this.state.id}}>
                    {({loading,error,data}) => {
                    
                        if(loading) return (<h4>Loading...</h4>)
                        if(error) return(<h4>No hay Casa</h4>)
                        if(data){console.log(data)}
                        let propiedad = data.singlePropiedad

                        return(
                                <div className="row justify-content center">
                                    <div className="col-lg-12 col-md-12">
                                        <h4>{propiedad.nombre}</h4>
                                       {
                                           propiedad.fotos.map((foto) => (
                                            <img src={foto} alt=""/>
                                           ))
                                       } 
                                        
                                    </div>

                                <div className="col-md-8 col-lg-8 text center">
                                    <h5>${propiedad.precio} MXN</h5>
                                    <h5>{propiedad.pais}</h5>
                                </div>
                                <div className="col-md-4 col-lg-4">
                                     <h5>Servicios</h5>
                                     <ul>

                                    
                                        {
                                            propiedad.servicios.map((servicio) => (
                                                <li>{servicio.nombre}</li>
                                            ))
                                        }
                                     </ul>
                                </div>
                                
                                </div>
                        )


                    }}
                </Query>


            )


        }





}

export default DetailPropiedad;