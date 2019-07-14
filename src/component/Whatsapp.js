import React, { Component } from 'react';
import logo from '../img/logo.png';
import '../styles/Whatsapp.css';

export default class Whatsapp extends Component {

    state = {
        activacion: false,
        mensaje: "",
        fecha: "",
        dispositivo: ""
    }

    toggleWhatsapp = () => {

        var animate = "";
        this.setState.activacion = !this.setState.activacion;
        this.setState.activacion ? animate = "aparecer .5s forwards" : animate = "desaparecer .5s forwards";
        document.getElementById('toggle').style.animation = animate;

    }

    onSubmit = e => {

        var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        var f = new Date();

        var http = this.state.mensaje;
        var numero = "573103131239";
        
        var mobile = {
            Android: function () {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function () {
                return (mobile.Android() || mobile.BlackBerry() || mobile.iOS() || mobile.Opera() || mobile.Windows());
            }
        };

        try {
            this.setState({
                fecha: diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear() + ' a las ' + f.getHours() + ':' + f.getMinutes(),
                dispositivo: mobile.any()[0]
            });
        }
        catch {
            this.setState({
                fecha: diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear() + ' a las ' + f.getHours() + ':' + f.getMinutes(),
                dispositivo: "PC"
            });
        }
        
        window.open('https://web.whatsapp.com/send?phone=' + numero + '&text=' + http, '_blank');

        e.preventDefault();
        
    }

    onChange = e => {

        this.setState({
            mensaje: e.target.value
        })

    }

    render() {
        return (
            <div className="Whatsapp">
                <button className="accionar" onClick={this.toggleWhatsapp}><i className="fab fa-whatsapp"></i> ¿Necesitas ayuda? Escribenos a whatsapp aquí</button>
                <div className="formulario" id="toggle">
                    <button className="close" onClick={this.toggleWhatsapp}><i className="fas fa-times"></i></button>
                    <div>
                        <img src={logo} alt="logo"></img>
                        <p className="escribenos">Escribenos, pronto resolveremos tus dudas</p>
                        <p className="color">Hola ¿Cómo podemos ayudarte?</p>
                    </div>
                    <form /* method="get"  */ onSubmit={this.onSubmit}>
                        <input
                            type="text"
                            placeholder="Dejanos un mensaje aquí..."
                            onChange={this.onChange}
                            value={this.state.mensaje}></input>
                        <button type="submit" className="enviar"><i className="fas fa-arrow-right"></i></button>
                    </form>
                </div>
            </div>
        )
    }
}
