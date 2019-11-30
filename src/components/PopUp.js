import React, { Component } from 'react'
import '../styles/PopUp.css'
import video from '../img/Ojala-3.mp4'

export default class PopUp extends Component {

    toggle = () => {
        document.getElementById('PopUp').style.animation = "cerrar 1s forwards";
    }

    render() {
        return (
            <div className="PopUp" id="PopUp" onClick={this.toggle}>
                <div className="ventana">
                    <button className="cerrar" onClick={this.toggle}><i className="fas fa-times"></i></button>
                    <h1>Sinanpsys it</h1>
                    <video autoplay="True" >
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
        )
    }
}
