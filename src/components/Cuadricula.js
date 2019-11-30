import React, { Component } from 'react'
import '../styles/Cuadricula.css'

import img1 from '../img/025-programming@2x.png'
import img2 from '../img/026-server@2x.png'
import img3 from '../img/027-database-3@2x.png'
import img4 from '../img/028-storage@2x.png'
import img5 from '../img/029-transaction@2x.png'
import img6 from '../img/030-laptop@2x.png'

import Tarjeta from './Tarjeta'

export default class Cuadricula extends Component {
    render() {
        return (
            <div className="Cuadricula">
                <div className="linea1 linea"></div>
                <div className="linea2 linea"></div>
                <Tarjeta titulo="LOREM IPSUM" img={img1} texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt corrupti? Quam recusandae officiis fuga minima unde ad, laudantium temporibus!" />
                <Tarjeta titulo="LOREM IPSUM" img={img2} texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt corrupti? Quam recusandae officiis fuga minima unde ad, laudantium temporibus!" />
                <Tarjeta titulo="LOREM IPSUM" img={img3} texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt corrupti? Quam recusandae officiis fuga minima unde ad, laudantium temporibus!" />
                <Tarjeta titulo="LOREM IPSUM" img={img4} texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt corrupti? Quam recusandae officiis fuga minima unde ad, laudantium temporibus!" />
                <Tarjeta titulo="LOREM IPSUM" img={img5} texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt corrupti? Quam recusandae officiis fuga minima unde ad, laudantium temporibus!" />
                <Tarjeta titulo="LOREM IPSUM" img={img6} texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, sunt corrupti? Quam recusandae officiis fuga minima unde ad, laudantium temporibus!" />
            </div>
        )
    }
}
