import React, { Component } from 'react';
import '../styles/Descripcion.css';
import author from '../img/author.png';

export default class Descripcion extends Component {
    render() {
        return (
            <div className="Descripcion">
                <h5>I AM DAN McCOY</h5>
                <h2>PASSION<br/>FOR CAPTURING<br/>EMOTIONS</h2>
                <div>
                    <h2>340k</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mauris dolor, gravida a varius blandit, auctor eget purus.</p>
                </div>
                <div>
                    <h2>56</h2>
                    <p>Nulla mauris dolor, gravida a varius blandit, auctor eget purus.</p>
                </div>
                <img src={author} alt="imagen del autor"></img>
            </div>
        )
    }
}
