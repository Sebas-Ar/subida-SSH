import React, { Component } from 'react';
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
            <div>
                <BarraNavPrincipal />
                <BarraNavDeslizable />
                <SliderFotos />
                <Presentacion />
                <div className="contenedor-tarjetas">
                    <Tarjetas titulo="WEDDINGS" icono={icon1} texto="Establecido hace demasiado tiempo que un lector se distraerá con el contenido." />
                    <Tarjetas titulo="LANDSCAPES" icono={icon2} texto="Establecido hace demasiado tiempo que un lector se distraerá con el contenido." />
                    <Tarjetas titulo="PRODUCTS" icono={icon3} texto="Establecido hace demasiado tiempo que un lector se distraerá con el contenido." />
                    <Tarjetas titulo="VIDEOS" icono={icon4} texto="Establecido hace demasiado tiempo que un lector se distraerá con el contenido." />
                </div>
                <Descripcion />
                <Seccion />
                <Detalles />
                <Whatsapp />
                <Footer />
            </div>
        )
    }
}
