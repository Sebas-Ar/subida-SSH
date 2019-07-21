import React, { Component } from 'react'
import {format} from 'timeago.js';
import '../styles/Mensajes.css';
const axios = require('axios');

export default class Mensajes extends Component {
    
    state = {
        mensajes: [],
        total: []
    }

    async componentDidMount() {
        this.recargarMensajes();
        this.recargarContador();
    }

    async recargarMensajes () {
        const res = await axios.get('http://localhost:4000/api/whatsapp');
        this.setState({
            mensajes: res.data
        });
    }

    async recargarContador() {
        
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

    deleteMensaje = async (id) => {
        await axios.delete(`http://localhost:4000/api/whatsapp/${id}`)
        this.recargarMensajes();
    }

    deleteAll = async () => {
        await axios.delete('http://localhost:4000/api/whatsapp');
        this.recargarMensajes();
    }

    removeAll = async () => {
        await axios.delete('http://localhost:4000/api/contador');
        this.recargarContador();
    }

    render() {
        return (
            <div className="Mensajes">
                <h1>Mensajes WhatsApp</h1>
                <h4>Mensajes: {this.state.mensajes.length}</h4>
                <h4>Cliks Total: {this.state.total} </h4>
                <h4>Cliks Desk: {this.state.desk} </h4>
                <h4>Cliks Movil: {this.state.movil} </h4>
                <button className="clear" onClick={() => this.deleteAll()}>Eliminar Mensajes</button>
                <button className="clear" onClick={() => this.removeAll()}>Reiniciar Click</button>
                <div className="cabecera">
                    <div className="title"><h5>Mensaje</h5></div>
                    <div className="title"><h5>Dispositivo</h5></div>
                    <div className="title"><h5>Fecha</h5></div>
                </div>
                <ul>
                    {
                    this.state.mensajes.map(mensaje => (
                        <li key={mensaje._id}>
                            <div className="campo"><h5>{mensaje.mensaje}</h5></div>
                            <button type="submit" onClick={() => this.deleteMensaje(mensaje._id)}>Borrar</button>
                            <div className="campo"><h5>{mensaje.dispositivo}</h5></div>
                            <div className="campo"><h5>{format(mensaje.date)}</h5></div>
                            
                        </li>
                    ))
                    }
                </ul>
            </div>
        )
    }
}
