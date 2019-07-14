import React, { Component } from 'react';
import slider from '../img/slider.jpg';
import border from '../img/border.png';
import '../styles/SliderFotos.css';

export default class SliderFotos extends Component {



    render() {
        return (
            <div className="SliderFotos">
                <img className="img" src={slider} alt="photos"></img>
                <img className="marco" src={border} alt="photos"></img>
                <h1>ALAN<br/>McCOY</h1>
                <h3>FREELANCE PHOTOGRAPHER<br/>DESIGNER AND ARTIST</h3>
                <p><a href="http://localhost:3000/" rel="noopener noreferrer">VIEW PORTAFOLIO</a></p>   
                <div className="linea"></div>

            </div>
        )
    }
}
