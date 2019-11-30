import React, { Component } from 'react'
import '../styles/TituloAlterno.css'
import img1 from '../img/Grupo-958.png'

export default class TituloAlterno extends Component {
    render() {
        return (
            <div className="TituloAlterno">
                <div className="linea"></div>
                <h1 className="titulo1">SERVICIOS GESTIONADOS</h1>
                <h1 className="titulo2">SOC - NOC</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam reprehenderit error saepe sunt dolor harum ea excepturi eius veritatis assumenda!</p>
                <img src={img1} alt=""/>
            </div>
        )
    }
}
