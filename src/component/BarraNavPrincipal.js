import React, { Component } from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import '../styles/BarraNavPrincipal.css';


export default class BarraNavPrincipal extends Component {
  render() {
    return (
      <div className="BarraNavPrincipal">
        <nav>

          <img src={logo} alt="logo" />

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/mensajes">Photograph</Link></li>
            <li><Link to="/details">Details</Link></li>
            <li><Link to="/about-me">Get in touch</Link></li>
            <li><Link to="/get-in-touch">About me</Link></li>
          </ul>

          <div className="social">
            <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
            <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
          </div>

        </nav>
      </div>
    );
  }
}
