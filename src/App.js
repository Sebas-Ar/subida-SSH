import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import Tarjetas from './components/Tarjetas'
import BarraNavDeslizable from "./components/BarraNavDeslizable"
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import Presentacion from './components/Presentacion'
import Imagenes from './components/Imagenes'
import MisionVision from './components/MisionVision'
import NuestroEquipo from './components/NuestroEquipo'
import ContactoMap from './components/ContactoMap'
import Titulo from './components/Titulo'
import Cuadricula from './components/Cuadricula'
import TituloAlterno from './components/TituloAlterno'
import ServiciosInfo from './components/ServiciosInfo'
import ServiciosInfoInverso from './components/ServiciosInfoInverso'
import Presentacion2 from './components/Presentacion2'
import TablaColor from './components/TablaColor'
import ContactoInfo from './components/ContactoInfo'
import Contactenos from './components/Contactenos';
import Inicio from './components/Inicio';


import icon1 from './img/001-analytical@2x.png'
import icon2 from './img/002-artificial-intelligence@2x.png'
import icon3 from './img/001-analytical@2x.png'
import icon4 from './img/004-filter@2x.png'
import imgTitulo1 from './img/Grupo-1324.png'
import imgTitulo2 from './img/Grupo-1323.png'
import imgTitulo3 from './img/Grupo-866.png'
import imgTitulo4 from './img/Grupo-433.png'
import imgTitulo5 from './img/Grupo-849.png'
import imgTitulo6 from './img/Grupo-506.png'
import imgTitulo7 from './img/Grupo-1322.png'
import img1 from './img/Grupo-1325.png'
import img2 from './img/Grupo-1116.png'
import img3 from './img/Grupo-1146.png'
import PopUp from './components/PopUp';


/* window.onscroll = function () {
    console.log("Vertical: " + window.scrollY);
    console.log("Horizontal: " + window.scrollX);

}; */

export default class App extends Component {

    render() {
        return (
            <Router>

                <Route path="/" render={() => {
                    return <div>
                        <BarraNavDeslizable />
                    </div>
                }} />

                <Route path="/" exact render={() => {
                    return <div className="inicio">
                        <PopUp />
                        <Inicio />
                        <div className="content">
                            <Tarjetas titulo="LOREM IPSUM" icono={icon1} texto="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore harum modi" />
                            <Tarjetas titulo="LOREM IPSUM" icono={icon2} texto="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore harum modi" />
                            <Tarjetas titulo="LOREM IPSUM" icono={icon3} texto="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore harum modi" />
                            <Tarjetas titulo="LOREM IPSUM" icono={icon4} texto="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore harum modi" />
                        </div>
                        <Contacto />
                        < Footer / >
                    </div>
                }} />

                <Route path="/nosotros" exact render={() => {
                    return <div>
                        <Presentacion />
                        <Imagenes />
                        <MisionVision />
                        <NuestroEquipo />
                        <ContactoMap titulo="mapa google maps 1" />
                        < Footer />
                    </div>
                }} />

                <Route path="/aliados-estrategicos" exact render={() => {
                    return <div>
                        <Titulo subtitulo="Lorem ipsum dolor sit." titulo1="ALIADOS" titulo2="ESTRATEGICOS" texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere totam voluptatum laboriosam doloribus voluptate molestias ducimus tenetur fuga! Commodi, sapiente!" img={imgTitulo1} />
                        <Cuadricula />
                        <ContactoMap titulo="mapa google maps 2" />
                        <Footer />
                    </div>
                }} />

                <Route path="/casos-de-exito" exact render={() => {
                    return <div>
                        <Titulo subtitulo="Lorem ipsum dolor sit." titulo1="CASOS DE" titulo2="EXITO" texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere totam voluptatum laboriosam doloribus voluptate molestias ducimus tenetur fuga! Commodi, sapiente!" img={imgTitulo2} />
                        <Cuadricula />
                        <ContactoMap titulo="mapa google maps 3" />
                        <Footer />
                    </div>
                }} />

                <Route path="/integracion-de-tecnologias" exact render={() => {
                    return <div>
                        <Titulo subtitulo="Lorem ipsum dolor sit." titulo1="INTEGRACIÓN" titulo2="DE TECNOLOGÍAS" texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere totam voluptatum laboriosam doloribus voluptate molestias ducimus tenetur fuga! Commodi, sapiente!" img={imgTitulo3} />
                        <Cuadricula />
                        <ContactoMap titulo="mapa google maps 4" />
                        <Footer />
                    </div>
                }} />

                <Route path="/seguridad-informatica" exact render={() => {
                    return <div>
                        <Titulo subtitulo="Lorem ipsum dolor sit." titulo1="SEGURIDAD" titulo2="INFORMÁTICA" texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere totam voluptatum laboriosam doloribus voluptate molestias ducimus tenetur fuga! Commodi, sapiente!" img={imgTitulo4} />
                        <Cuadricula />
                        <ContactoMap titulo="mapa google maps 5" />
                        <Footer />
                    </div>
                }} />

                <Route path="/servidores" exact render={() => {
                    return <div>
                        <Titulo subtitulo="Lorem ipsum dolor sit." titulo1="" titulo2="SERVIDOES" texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere totam voluptatum laboriosam doloribus voluptate molestias ducimus tenetur fuga! Commodi, sapiente!" img={imgTitulo5} />
                        <Cuadricula />
                        <ContactoMap titulo="mapa google maps 6" />
                        <Footer />
                    </div>
                }} />

                <Route path="/soluciones-en-redes" exact render={() => {
                    return <div>
                        <Titulo subtitulo="Lorem ipsum dolor sit." titulo1="SOLCIONES" titulo2="EN REDES" texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere totam voluptatum laboriosam doloribus voluptate molestias ducimus tenetur fuga! Commodi, sapiente!" img={imgTitulo6} />
                        <Cuadricula />
                        <ContactoMap titulo="mapa google maps 6" />
                        <Footer />
                    </div>
                }} />

                <Route path="/servicios-profesionales" exact render={() => {
                    return <div>
                        <Titulo subtitulo="Lorem ipsum dolor sit." titulo1="SERVICIOS" titulo2="PROFESIONALES" texto="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere totam voluptatum laboriosam doloribus voluptate molestias ducimus tenetur fuga! Commodi, sapiente!" img={imgTitulo7} />
                        <Cuadricula />
                        <ContactoMap titulo="mapa google maps 7" />
                        <Footer />
                    </div>
                }} />

                <Route path="/servicios-gestionados" exact render={() => {
                    return <div>
                        <TituloAlterno />
                        <ServiciosInfo img={img1} titulo="DATA SECURITY" parrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ratione veniam adipisci totam, repellendus recusandae."/>
                        <ServiciosInfoInverso img={img2} titulo="DATA SECURITY" parrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ratione veniam adipisci totam, repellendus recusandae." />
                        <ServiciosInfo img={img3} titulo="DATA SECURITY" parrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ratione veniam adipisci totam, repellendus recusandae." />
                        <ContactoMap titulo="mapa google maps 8" />
                        <Footer />
                    </div>
                }} />

                <Route path="/trabaje-con-nosotros" exact render={() => {
                    return <div>
                        <Presentacion2 />
                        <TablaColor />
                        <ContactoInfo />
                        <Footer />
                    </div>
                }} />

                <Route path="/contactenos" exact render={() => {
                    return <div>
                        <Contactenos />
                        <Footer />
                    </div>
                }} />

            </Router>
        )
    }
}
