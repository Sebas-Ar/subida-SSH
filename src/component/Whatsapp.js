import React, { Component } from 'react';
import logo from '../img/logo.png';
import '../styles/Whatsapp.css';
const axios = require('axios');


export default class Whatsapp extends Component {

    state = {
        activacion: false,
        mensaje: "",
        dispositivo: "",
        total: 0,
        desk: 0,
        movil: 0
    }

    async componentDidMount() {
        const numeros = await axios.get('http://localhost:4000/api/contador');
        if (numeros.data[0]) {
            this.setState({
                total: numeros.data[0].contTotal,
                desk: numeros.data[0].contDesk,
                movil: numeros.data[0].contMovil
            })
        } else {

            this.setState({
                total: 0,
                desk: 0,
                movil: 0
            });
        }


    }

    toggleWhatsapp = async () => {

        let animate = "";

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
                dispositivo: mobile.any()[0]
            });
            if (!this.state.activacion) {
                this.setState({
                    movil: this.state.movil + 1
                });
            }
        }
        catch {
            this.setState({
                dispositivo: "Desktop"
            });
            if (!this.state.activacion) {
                this.setState({
                    desk: this.state.desk + 1
                });
            }
        }

        this.setState({
            activacion: !this.state.activacion
        });
        this.state.activacion ? animate = "desaparecer .5s forwards" : animate = "aparecer .5s forwards";
        document.getElementById('toggle').style.animation = animate;
        if (!this.state.activacion) {
            this.setState({
                total: this.state.total + 1
            });
        }

        const numeros = await axios.get('http://localhost:4000/api/contador');

        if(!numeros.data[0]){
            await axios.post('http://localhost:4000/api/contador', {
                contDesk: 0,
                contMovil: 0,
                contTotal: 0
            });
            console.log('numeros creados');
        } else {
            await axios.put(`http://localhost:4000/api/contador/${numeros.data[0]._id}`,{
                contTotal: this.state.total,
                contDesk: this.state.desk,
                contMovil: this.state.movil
            })
        }


    }

    onSubmit = async e => {
        e.preventDefault();

        var http = this.state.mensaje;
        var numero = "573103131239";

        await axios.post('http://localhost:4000/api/whatsapp', {
            mensaje: this.state.mensaje,
            dispositivo: this.state.dispositivo
        });

        window.open(`https://web.whatsapp.com/send?phone=${numero}&text=${http}`, '_blank');

        this.setState({
            mensaje: ""
        })
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
