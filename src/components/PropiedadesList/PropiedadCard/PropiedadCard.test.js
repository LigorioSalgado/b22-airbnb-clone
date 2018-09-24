import React from 'react';
import {shallow} from "enzyme";
import PropiedadCard from './PropiedadCard';


describe("CardPropiedad", () =>{

    const propiedad = {
        nombre:"casa test",
        _id:"sadsafsdfgdsgdff",
        fotos:"https://devf.mx/",
        precio:230,
        descripcion_corta:"Texto random de pruebas",
        calificacion:[{estrellas:2},{estrellas:3}]

    }

    const component = shallow(<PropiedadCard propiedad={propiedad}/>)

    it("Debe renderear el nombre de la casa",() => {

        expect(component.find('h5.card-title').text()).toBe(propiedad.nombre)

    })

})
