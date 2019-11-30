import React, { Component } from 'react'
import '../styles/ServiciosInfoInverso.css'

export default class ServiciosInfoInverso extends Component {
    render(props) {
        return (
            <div className="ServiciosInfoInverso">
                <div>
                    <h3>{this.props.titulo}</h3>
                    <p>{this.props.parrafo}</p>
                    <ul>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                    </ul>
                </div>
                <img src={this.props.img} alt="" />
            </div>
        )
    }
}