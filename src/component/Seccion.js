import React, { Component } from 'react'
import '../styles/Seccion.css';

export default class Seccion extends Component {
    render() {
        return (
            <div className="Seccion">
                <i className="fas fa-map-marker-alt"></i>
                <p>Mauris rhoncus orci in imperdiet placerat. Lorem ipsum dolor.</p>
                <i className="far fa-eye"></i>
                <p>Estibulum euismod nisl suscipit ligula volutpat, a feugiat urna maximus.</p>
            </div>
        )
    }
}
