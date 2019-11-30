import React, { Component } from 'react'
import '../styles/Imagenes.css'

import img1 from '../img/activo-1@2x.png'
import img2 from '../img/activo-2@2x.png'

export default class Imagenes extends Component {
    render() {
        return (
            < div className = "Imagenes" >
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
                <img src={img1} alt=""/>
                <img src={img2} alt=""/>
            </div>
        )
    }
}
