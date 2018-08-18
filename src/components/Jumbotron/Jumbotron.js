import React, { Component } from 'react';
import './jumbotron.scss';


class Jumbotron extends Component{


    render(){
        return(
            <section className="jumbotron text-center">
                <h1 className="display-3">!Bienvenido al Clone de  Airbnb!</h1>
                <hr className="my-4" />
                <p>Busca propiedades en cualquier parte del mundo</p>
                <div className="row justify-content-center">
                    <div className="col-md-10">
                    <form action="" className="form-inline justify-content-center">
                        <label className="sr-only" htmlFor="search">Busqueda:</label>
                                <div className="input-group mb-2 mr-sm-2 mb-sm-1">
                                    <input type="search" name="search" id="search" 
                                    className="form-control py-2" placeholder="casa en Miami"/>
                                </div>
                        <button type="button" className="btn btn-search my-2" >Buscar</button>
                    </form>
                </div>
            </div>

            </section>

        )

    }


}


export default Jumbotron;