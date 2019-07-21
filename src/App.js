import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BarraNavPrincipal from './component/BarraNavPrincipal';
import BarraNavDeslizable from "./component/BarraNavDeslizable";
import Footer from './component/Footer';
import SliderFotos from './component/SliderFotos';
import Presentacion from './component/Presentacion';
import Tarjetas from './component/Tarjetas';
import Descripcion from './component/Descripcion';
import Seccion from './component/Seccion';
import Detalles from './component/Detalles';
import Whatsapp from './component/Whatsapp';
import Mensajes from './component/Mensajes';

import icon1 from './img/icon1.png';
import icon2 from './img/icon2.png';
import icon3 from './img/icon3.png';
import icon4 from './img/icon4.png';


/* window.onscroll = function () {
    console.log("Vertical: " + window.scrollY);
    console.log("Horizontal: " + window.scrollX);

}; */

export default class App extends Component {

    render() {
        return (
            // eslint-disable-next-line
            <Router>
                <Route path="/" render={() => {
                    return <div>
                        <BarraNavPrincipal />
                        <BarraNavDeslizable />
                        <Whatsapp />
                    </div>
                }} />
                <Route path="/" exact render={() => {
                    return <div>
                        <SliderFotos />
                        <Presentacion />
                        <Tarjetas titulo="WEDDINGS" icono={icon1} texto="Curabitur sed iaculis dolor, non congue ligula." />
                        <Tarjetas titulo="LANDSCAPES" icono={icon2} texto="Curabitur sed iaculis dolor, non congue ligula." />
                        <Tarjetas titulo="PRODUCTS" icono={icon3} texto="Curabitur sed iaculis dolor, non congue ligula." />
                        <Tarjetas titulo="VIDEOS" icono={icon4} texto="Curabitur sed iaculis dolor, non congue ligula." />
                        <Descripcion />
                        <Seccion />
                        <Detalles />
                        <Footer />
                    </div>
                }} />

                <Route path="/photography" exac render={() => {
                    return <div>
                        <Footer />
                    </div>
                }} />

                <Route path="/details" exac render={() => {
                    return <div>
                        <Footer />
                    </div>
                }} />

                <Route path="/about-me" exac render={() => {
                    return <div>
                        <Footer />
                    </div>
                }} />

                <Route path="/get-in-touch" exac render={() => {
                    return <div>
                        <Footer />
                    </div>
                }} />

                <Route path="/mensajes" exac render={() => {
                    return <div>
                        <Mensajes />
                        <Footer />
                    </div>
                }} />
                    
 
            </Router>
        )
    }
}
