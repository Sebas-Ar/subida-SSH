import React, { Component } from 'react'
import '../styles/Contacto.css'

export default class Contacto extends Component {
    render() {
        return (
            <div className="Contacto">
                <div className="bloque" ></div>
                <h2>CONTÁCTENOS</h2>
                <form>
                    <h3>Lorem Ipsum</h3>
                    <label>Nombre</label>
                    <label>Email</label>
                    <input type="text" name="nombre"/>
                    <input type="text" name="email"/>
                    <label>Mensaje</label>
                    <textarea name=""cols="30" rows="10"></textarea>
                    <button type="submit">Enviar</button>
                </form>
                <div className="info">
                    <h3>Información de Contacto</h3>
                    <p>Lorem ipsum</p>
                    <p>Cll 1 # 2-3 s</p>
                    <p>Barrio - País</p>
                    <br/>
                    <p>300 000 0000</p>
                    <br/>
                    <p>correo@correo.com</p>
                </div>

            </div>
        )
    }
}
