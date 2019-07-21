import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../img/logo2.png';
import '../styles/BarraNavDeslizable.css';

export default class BarraNavDeslizable extends Component {

    state = {
        activacion: false
    }


    toggle = () => {
        var animate = "";
        this.setState({
            activacion: !this.state.activacion
        });
        this.state.activacion ? animate = "desplegar .5s forwards" : animate = "ocultar .5s forwards";
        document.getElementById('change').style.animation = animate;
        document.getElementById('darkness').style.animation = animate;
    }
 
    render() {
        return (
            <div className="BarraNavDeslizable">
                <div id="darkness" className="pantalla" onClick={this.toggle}></div>
                <header>
                    <img src={logo2} alt="logo"></img>
                    <button className="activar" onClick={this.toggle}><i className="fas fa-sliders-h"></i></button>
                </header>
                
                <nav id="change">
                    <button className="cerrar" onClick={this.toggle}><i className="fas fa-times"></i></button>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/mensajes">Photograph</Link></li>
                        <li><Link to="/">Details</Link></li>
                        <li><Link to="/">Get in touch</Link></li>
                        <li><Link to="/">About me</Link></li>
                    </ul>

                    <div className="socialDeslizable">
                        <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
                    </div>
                </nav>
                
            </div>
            
        )
    }
}
