import React, { Component } from 'react';
import './signup.scss';
import GenericInput from '../GenericInput/GenericInput';

class Signup extends Component{

    constructor(){
        super();
        this.state = {
            correo:"",
            nombre:"",
            apellidos:"",
            password:"",
            check_password:"",
            username:"",
            genero:"M",
            ubicacion:"MX",
            rol:"huesped"
        }
    }

    checkInput(event){
        let {name,value} =  event.target 
        this.setState({
            [name]:value
        })

    }
    
    render(){
        return(
            <div className="row justify-content-center">
                <div className="col-md-10 col-lg-8">
                    <form role="form">
                        <GenericInput type={"email"} 
                            value={this.state.correo}
                            name={"correo"}
                            onChange={this.checkInput} 
                        />
                        <GenericInput type={"text"} 
                            value={this.state.nombre}
                            name={"nombre"}
                            onChange={this.checkInput} 
                        />

                        <GenericInput type={"text"} 
                            value={this.state.apellidos}
                            name={"apellidos"}
                            onChange={this.checkInput} 
                        />

                        <GenericInput type={"text"} 
                            value={this.state.username}
                            name={"username"}
                            onChange={this.checkInput} 
                        />

                        <GenericInput type={"password"} 
                            value={this.state.password}
                            name={"password"}
                            onChange={this.checkInput} 
                        />

                        <GenericInput type={"password"} 
                            value={this.state.check_password}
                            name={"check_password"}
                            onChange={this.checkInput} 
                        />
                        
                        <div className="form-group">
                            <label htmlFor="">genero</label>
                            <select name="genero" id="genero"
                            onChange={this.checkInput} 
                            value={this.state.genero}>
                                <option value="H">Hombre</option>
                                <option value="M">Mujer</option>
                            </select>
                        </div>
                    
                        <div className="form-group">
                            <label htmlFor="">ubicacion</label>
                            <select name="ubicacion" id="ubicacion"
                            onChange={this.checkInput} 
                            value={this.state.ubicacion}
                            >
                                <option value="MX">México</option>
                                <option value="US">USA</option>
                                <option value="CA">Canadá</option>
                                <option value="GT">Guatemala</option>
                                <option value="BZ">Belice</option>
                            </select>
                        </div>

                    </form>
                </div>    
            </div>
        )
    }


}


export default Signup;