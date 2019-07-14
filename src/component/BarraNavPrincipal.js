import React, { Component } from 'react';
import logo from '../img/logo.png';
import '../styles/BarraNavPrincipal.css';


export default class BarraNavPrincipal extends Component {
  render() {
    return (
      <div className="BarraNavPrincipal">
        <nav>

          <img src={logo} alt="logo" />

          <ul>
            <li><a href="http://localhost:3000/">Home</a></li>
            <li><a href="https://reactjs.org" rel="noopener noreferrer" target="_blank">Photograph</a></li>
            <li><a href="https://reactjs.org" rel="noopener noreferrer" target="_blank">Details</a></li>
            <li><a href="https://reactjs.org" rel="noopener noreferrer" target="_blank">Get in touch</a></li>
            <li><a href="https://reactjs.org" rel="noopener noreferrer" target="_blank">About me</a></li>
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
