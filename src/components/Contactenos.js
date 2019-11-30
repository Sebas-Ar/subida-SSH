import React, { Component } from 'react'
import '../styles/Contactenos.css'

export default class Contactenos extends Component {

    toggleColombia = () => {
        document.getElementById('colombia').style.display = "inline"
        document.getElementById('peru').style.display = "none"
        document.getElementById('argentina').style.display = "none"
    }
    togglePeru = () => {
        document.getElementById('colombia').style.display = "none"
        document.getElementById('peru').style.display = "inline"
        document.getElementById('argentina').style.display = "none"
    }

    toggleArgentina = () => {
        document.getElementById('colombia').style.display = "none"
        document.getElementById('peru').style.display = "none"
        document.getElementById('argentina').style.display = "inline"

    }
    
    render(props) {
        return (
            <div className="Contactenos">
                <div className="bloque" ></div>
                <h2>CONTÁCTENOS</h2>
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
                <div className="botones">
                    <button onClick={this.toggleColombia}>Colombia</button>
                    <button onClick={this.togglePeru}>Perú</button>
                    <button onClick={this.toggleArgentina}>Argentina</button>
                </div>
                <iframe className="uno" id="colombia" title={this.props.titulo} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16289432.436779939!2d-83.39405249146758!3d4.609733253965316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e15a43aae1594a3%3A0x9a0d9a04eff2a340!2sColombia!5e0!3m2!1ses-419!2sco!4v1574536643235!5m2!1ses-419!2sco" width="100%" height="650" frameBorder="0" allowFullscreen=""></iframe>
                <iframe className="dos" id="peru" title={this.props.titulo} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16136222.159844154!2d-84.0710109594294!3d-9.108561263540954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c850c05914f5%3A0xf29e011279210648!2zUGVyw7o!5e0!3m2!1ses-419!2sco!4v1574536753850!5m2!1ses-419!2sco" width="100%" height="650" frameBorder="0" allowFullscreen=""></iframe>
                <iframe className="tres" id="argentina" title={this.props.titulo} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26096802.453545!2d-81.64759449502563!3d-37.018268649971965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sargentina!5e0!3m2!1ses-419!2sco!4v1574536823086!5m2!1ses-419!2sco" width="100%" height="650" frameBorder="0" allowFullscreen=""></iframe>
            </div>
        )
    }
}
