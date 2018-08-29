import React, { Component } from 'react';
import gql from 'graphql-tag'
import {Mutation,Query} from 'react-apollo';
import GenericInput from '../GenericInput/GenericInput';
import FileUploader from 'react-firebase-file-uploader';
import Firebase from '../../Firebase';
import Calendar from 'react-calendar';



const CREATE_HOUSE = gql`
    mutation AddPropiedad($data:Propiedades!){
        addPropiedad(data:$data){
            _id,
            nombre
        }
    }
`

const GET_SERVICES =  gql`
    query{
        allServicios{
            _id,
            nombre
        }
    }
`

class FormPropiedad extends Component{


    constructor(props){
        super(props)

        this.state = {
            nombre:"",
            descripcion_corta:"",
            descripcion_larga:"",
            ubicacion:"",
            pais:"MX",
            tipo:1,
            precio:0,
            fotos:[],
            servicios:[],
            disponibilidad_inicial:new Date(),
            disponibilidad_final:new Date()

        }

    }

    onInputChange = (event) => {
        let {name,value} =  event.target; 
        this.setState({
            [name]:value
        })
    }

    handleUploadSuccess = (filename) => {
        Firebase.storage().ref('images').child(filename)
            .getDownloadURL().then(url=> {
                this.setState(prevState => ({
                    fotos:[...prevState.fotos,url]
                }))
            })
    }

    handleUploadError = (error) => {
        console.log(error)
    }

    checkCalendarInput = (name,value) => {
        this.setState({
            [name]:value
        });
    }

    onCheckBoxChange = (event) => {
       if(event.target.checked){
        console.log(event.target.name)
        let array = [...this.state.servicios]
        array.push(event.target.name)
        console.log(this.state.servicios)
        this.setState({
            servicios:array
        })
       }else{
        let array = [...this.state.servicios]; // make a separate copy of the array
        let index = array.indexOf(event.target.name)
        console.log(this.state.servicios)
        array.splice(index, 1);
        this.setState({servicios: array});

       }
    }

    onFormSubmit = (event,addPropiedad) => {
        event.preventDefault();
        console.log(this.state)
    }

    renderQuery = () => (
        <Query query={GET_SERVICES}>
            { ({loading,error,data}) =>{
                if(loading) return "Loading ..."
                if(error) return "No hay servicios :("
                return data.allServicios.map((servicio) => (
                    <label className="form-control">
                    <input type="checkbox" 
                        name={servicio._id}
                        value={servicio._id}
                        checked={
                            this.state.servicios.indexOf(servicio._id)!== -1? true:false
                         }
                        onChange={this.onCheckBoxChange}
                    />
                    {servicio.nombre}
                    </label>
                ))

                }

            }

        </Query>
    )

    render() {
        return(
            <Mutation mutation={CREATE_HOUSE}>
            {   
                (addPropiedad,{ data }) => (

                    <div className="row justify-content-center">
                        <form onSubmit={(e) => this.onFormSubmit(e,addPropiedad) }>

                                <GenericInput name={"nombre"}
                                    type={"text"} value={this.state.nombre}
                                    change={this.onInputChange}
                                />

                                <div className="form-group">
                                    <label htmlFor="">descripcion corta:</label>
                                    <textarea cols="10" rows="10" className="form-control"
                                    value={this.state.descripcion_corta} name="descripcion_corta"
                                    onChange={this.onInputChange}
                                     ></textarea>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">descripcion larga:</label>
                                    <textarea cols="15" rows="10'" className="form-control" 
                                    value={this.state.descripcion_larga} name="descripcion_larga"
                                    onChange={this.onInputChange}
                                    ></textarea>
                                </div>

                                <GenericInput name={"ubicacion"}
                                    type={"text"} value={this.state.ubicacion}
                                    change={this.onInputChange}
                                />

                                <div className="form-group">
                                    <label htmlFor="">pais</label>
                                    <select className="form-control"
                                    value={this.state.pais} name="pais"
                                    onChange={this.onInputChange}
                                     >
                                        <option value="MX">México</option>
                                        <option value="US">USA</option>
                                        <option value="CA">Canadá</option>
                                        <option value="BZ">Belice</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="">tipo</label>
                                    <select className="form-control"
                                    value={this.state.tipo} name="tipo" 
                                    onChange={this.onInputChange}
                                    >
                                        <option value={1}>Casa</option>
                                        <option value={2}>Departamento</option>
                                        <option value={3}>Habitación</option>
                                    </select>
                                </div>

                                <GenericInput name={"precio"}
                                    type={"number"} value={this.state.precio}
                                    change={this.onInputChange}
                                />

                                <div className="form-group">
                                    <label className="btn btn-danger">
                                        Agrega Imagenes
                                        <FileUploader
                                            hidden
                                            accept="image/*"
                                            randomizeFilename
                                            multiple
                                            storageRef={Firebase.storage().ref('images')}
                                            onUploadError={this.handleUploadError}
                                            onUploadSuccess={this.handleUploadSuccess}
                                        />

                                    </label>
                                </div>                            

                                <div className="form-group">
                                    <label htmlFor="">servicios: </label>
                                    {this.renderQuery()}
                                </div> 

                                <Calendar 
                                    onChange={(value) => this.checkCalendarInput("disponibilidad_inicial",value) }
                                    value={this.state.disponibilidad_inicial}
                                />

                                <Calendar 
                                    onChange={(value) => this.checkCalendarInput("disponibilidad_final",value)}
                                    value={this.state.disponibilidad_final}
                                
                                />
                            
                            <button type="submit" className="btn btn-signup"> Enviar </button>


                        </form>
                    </div>

                )
            }

            </Mutation>
        )
    }


}


export default FormPropiedad;