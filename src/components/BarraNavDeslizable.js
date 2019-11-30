import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/BarraNavDeslizable.css';
import facebook from '../img/facebook-logo@2x.png'
import instagram from '../img/instagram@2x.png'
import twitter from '../img/twitter-logo@2x.png'
import share from '../img/sharethis-logo@2x.png'

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
                <Link to="#" title="Menú">
                    <button className="activar" onClick={this.toggle}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <i className="fas fa-sliders-h"></i>
                    </button>
                </Link>
                
                <nav id="change">
                    <button className="cerrar" onClick={this.toggle}><i className="fas fa-times"></i></button>
                    <ul>
                        <li><div className="punto"></div><Link onClick={this.toggle} to="/">INICIO</Link></li>
                        <li><div className="punto"></div><Link onClick={this.toggle} to="/nosotros">NOSOTROS</Link></li>
                        <li className="lista"><div className="punto"></div><Link to="#">SERVICIOS</Link>
                            <ul className="lista">
                                <li><Link onClick={this.toggle} to="/integracion-de-tecnologias">INTREGRACIÓN DE TECNOLOGÍAS</Link></li>
                                <li><Link onClick={this.toggle} to="/seguridad-informatica">SEGURIDAD INFORMÁTICA</Link></li>
                                <li><Link onClick={this.toggle} to="/servidores">SERVIDORES</Link></li>
                                <li><Link onClick={this.toggle} to="/servicios-gestionados">SOC - NOC</Link></li>
                                <li><Link onClick={this.toggle} to="/soluciones-en-redes">SOLUCIONES EN REDES</Link></li>
                                <li><Link onClick={this.toggle} to="/servicios-profesionales">SERVICIOS PROFESIONALES</Link></li>
                            </ul>
                        </li>
                        <li><div className="punto"></div><Link onClick={this.toggle} to="/trabaje-con-nosotros">TRABAJE CON NOSOTROS</Link></li>
                        <li><div className="punto"></div><Link onClick={this.toggle} to="/aliados-estrategicos">ALIADOS ESTRATÉGICOS</Link></li>
                        <li><div className="punto"></div><Link onClick={this.toggle} to="/casos-de-exito">CASOS DE ÉXITO</Link></li>
                        <li><div className="puntoCerrar"></div><Link onClick={this.toggle} to="/contactenos">CONTACTO</Link></li>
                    </ul>

                    <div className="socialDeslizable">
                        <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><img src={ facebook } alt="Logo Facebook"/></a>
                        <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"><img src={ instagram } alt=""/></a>
                        <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank"><img src={ twitter } alt=""/></a>
                        <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"><img src={ share } alt=""/></a>
                    </div>
                </nav>
                
            </div>
            
        )
    }
}
