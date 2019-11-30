import React, { Component } from 'react'
import '../styles/TablaColor.css'

export default class TablaColor extends Component {
    render() {
        return (
            <div className="TablaColor">
                <h5><span>1</span></h5>
                <h5 className="rojo"><span className="rojo">2</span></h5>
                <h5><span>3</span></h5>
                <span className="titulos rojo">
                    <h2 className="tit1" >PERFILES</h2>
                    <h2 className="tit2" >NECESARIOS</h2>
                </span>
                <div className="azul"><h2 className="titulos ">TALENTO</h2></div>
                <div className="rojo"><h2 className="titulos ">EXPERIENCIA</h2></div>
                <div className="sinColor"></div>
                <div className="sinColor"></div>
                <div className="sinColor"></div>
                <div className="container rojo">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ea distinctio natus quidem deleniti.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
                <div className="container azul">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ea distinctio natus quidem deleniti.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
                <div className="container rojo">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ea distinctio natus quidem deleniti.</p>
                    <ul>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>
                </div>
                <div className="azul">.</div>
                <div className="rojo"></div>
                <div className="azul"></div>
            </div>
        )
    }
}
