import React, { Component } from 'react';

import '../styles/Tarjetas.css';

export default class Tarjetas extends Component {
    render(props) {
        return (
            <a className="Tar" href="https://reactjs.org" rel="noopener noreferrer">
                <div className="Tarjetas">
                    <img src={this.props.icono} alt="Icono"></img>
                    <h3>{this.props.titulo}</h3>
                    <p>{this.props.texto}</p>
                </div>
            </a >
        )
    }
}
