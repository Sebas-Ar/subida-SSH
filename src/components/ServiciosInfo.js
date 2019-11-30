import React, { Component } from 'react'
import '../styles/ServiciosInfo.css'

export default class ServiciosInfo extends Component {
    render(props) {
        return (
            <div className="ServiciosInfo">
                <img src={this.props.img} alt=""/>
                <div>
                    <h3>{this.props.titulo}</h3>
                    <p>{this.props.parrafo}</p>
                    <ul>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                        <li>Lorem, ipsum dolor.</li>
                    </ul>
                </div>
            </div>
        )
    }
}
