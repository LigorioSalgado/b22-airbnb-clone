import React, { Component } from 'react'; 
import './propiedadCard.scss';
import Rating from 'react-rating';

class PropiedadCard extends Component{

    constructor(props){
        super(props);
        this.state = {
            nombre:props.propiedad.nombre,
            foto:props.propiedad.fotos[0],
            precio:props.propiedad.precio,
            descripcion_corta:props.propiedad.descripcion_corta,
            calificacion:props.propiedad.calificacion
        }
    }

    calculateAVG = () => {
        if(this.state.calificacion.length === 0) return 0
        let suma = 0
        this.state.calificacion.forEach((calificacion) => {
            suma += calificacion.estrellas
        })
        return suma/this.state.calificacion.length
    }


    render(){
        return(
            <div className="card card-propiedad" >
                <img className="card-img-top" src={this.state.foto} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.state.nombre}</h5>
                    <h6 className="card-subtitle">${this.state.precio} MXN</h6>
                    <p className="card-text">{this.state.descripcion_corta}</p>
                    <Rating
                        emptySymbol="fa fa-star-o fa-2x star"
                        fullSymbol="fa fa-star fa-2x star"
                        readonly
                        fractions={2}
                        initialRating={this.calculateAVG()}
                    />
             </div>
            </div>
        )    

    }

}

export default PropiedadCard;