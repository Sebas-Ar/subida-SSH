import React, { Component } from 'react'
import '../styles/MisionVision.css'
import img1 from '../img/activo-1@2x.png'

export default class MisionVision extends Component {
    render() {
        return (
            < div className = "MisionVision" >
                <img src={img1} alt=""/>
                <img src={img1} alt=""/>
                <div className="linea1"></div>
                <div className="linea2"></div>
                <h3 className="tit1">MISIÓN</h3>
                <h3 className="tit2">VISIÓN</h3>
                <p className="cont1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quibusdam consequuntur eligendi doloremque ducimus ad impedit sint rerum ab delectus modi, a quam quidem? Quae esse quaerat enim fugit quia sed provident animi dolore dolor repellendus. Itaque quis laudantium minima?</p>
                <p className="cont2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio animi eligendi sint nulla, ex alias? Expedita, sunt! Fugit alias quis pariatur corporis voluptate. Amet doloremque accusantium reprehenderit vel in. Ullam consequatur alias iure aliquam suscipit dolores dolore tempora quam ducimus.</p>
            </div>
        )
    }
}