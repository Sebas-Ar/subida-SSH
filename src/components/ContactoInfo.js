import React, { Component } from 'react'
import '../styles/ContactoInfo.css'

export default class ContactoInfo extends Component {
    render() {
        return (
            <div className="ContactoInfo">
                <h2>ENVIENOS SU HOJA DE VIDA</h2>
                <p className="parrafo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, non laboriosam? Eum tempora vero </p>
                <div className="form">
                    <form>
                        <h3>Lorem Ipsum</h3>
                        <label>Nombre</label>
                        <label>Email</label>
                        <input type="text" name="nombre" />
                        <input type="text" name="email" />
                        <label>Mensaje</label>
                        <textarea name="" cols="30" rows="10"></textarea>
                        <button type="submit">Enviar</button>
                    </form>
                    <div className="info">
                        <h3>Información de Contacto</h3>
                        <p>Lorem ipsum</p>
                        <p>Cll 1 # 2-3 s</p>
                        <p>Barrio - País</p>
                        <br />
                        <p>300 000 0000</p>
                        <br />
                        <p>correo@correo.com</p>
                    </div>
                </div>
            </div>
        )
    }
}
