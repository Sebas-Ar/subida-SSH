import React, { Component } from 'react';
import slider1 from '../img/slider1.jpg';
import slider2 from '../img/slider2.jpg';
import slider3 from '../img/slider3.jpg';
import slider4 from '../img/slider4.jpg';
import border from '../img/border.png';
import '../styles/SliderFotos.css';

export default class SliderFotos extends Component {

    render() {

        return (
            <div className="SliderFotos">
                <div className="container">
                    <ul>
                        <li>
                            <img className="img" src={slider1} alt="photos"></img>
                        </li>
                        <li>
                            <img className="img" src={slider2} alt="photos"></img>
                        </li>
                        <li>
                            <img className="img" src={slider3} alt="photos"></img>
                        </li>
                        <li>
                            <img className="img" src={slider4} alt="photos"></img>
                        </li>
                        <img className="marco" src={border} alt="photos"></img>
                        <h1>ALAN<br />McCOY</h1>
                        <h3>FREELANCE PHOTOGRAPHER<br />DESIGNER AND ARTIST</h3>
                        <p><a href="http://localhost:3000/" rel="noopener noreferrer">VIEW PORTAFOLIO</a></p>
                        <div className="linea"></div>
                    </ul>
                    
                </div>

            </div>
        )
    }
}
