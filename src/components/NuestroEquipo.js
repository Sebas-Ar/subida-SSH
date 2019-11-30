import React, { Component } from 'react'
import '../styles/NuestroEquipo.css'

import img1 from '../img/devonshires-person@2x.png'
import img2 from '../img/happy-person-png-transparent-happy-personpng-images-pluspng-people-faces-png-1042_788@2x.png'
import img3 from '../img/MARTIN-2@2x.png'
import img4 from '../img/office_person@2x.png'

export default class NuestroEquipo extends Component {
    render() {
        return (
            <div className="NuestroEquipo">
                <h1>NUESTRO EQUIPO</h1>
                
                <div className="personas">
                    <div className="persona persona1">
                        <img src={img1} alt=""/>
                        <h4>LOREM IPSUM</h4>
                        <p>Ceo/SIT AMET</p>
                    </div>
                    <div className="persona">
                        <img src={img2} alt="" />
                        <h4>LOREM IPSUM</h4>
                        <p>Ceo/SIT AMET</p>
                    </div>
                    <div className="persona">
                        <img src={img3} alt="" />
                        <h4>LOREM IPSUM</h4>
                        <p>Ceo/SIT AMET</p>
                    </div>
                    <div className="persona">
                        <img src={img4} alt="" />
                        <h4>LOREM IPSUM</h4>
                        <p>Ceo/SIT AMET</p>
                    </div>
                    
                </div>
            </div>
        )
    }
}
