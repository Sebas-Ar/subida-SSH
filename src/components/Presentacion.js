import React, { Component } from 'react'
import '../styles/Presentacion.css'
import video from '../img/Ojala-3.mp4'

export default class Presentacion extends Component {
    render() {
        return (
            < div className="Presentacion" >
                <video autoplay="True" loop="True" >
                    <source src={video} type="video/mp4"/>
                </video>
                <div>
                    <h1>NOSOTROS</h1>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit amet, eos labore deserunt eligendi voluptates tempore suscipit laudantium magni ex?</p>
                        <button>CONOCE MÁS</button>
                    </div>
                </div>
                <div className="subtitulo">
                    <h2>NUESTROS ALIADOS</h2>
                </div>
            </div>
        )
    }
}
