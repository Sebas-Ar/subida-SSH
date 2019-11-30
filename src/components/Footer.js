import React, { Component } from 'react'
import '../styles/Footer.css';

var timer = null;

export default class Footer extends Component {

    
    contador = () => {

        var i = window.scrollY;
        window.scrollTo(0, i - 15);
        if (window.scrollY === 0) clearInterval(timer)
        
    }

    scroll = () => {

        timer = setInterval(this.contador, 1);
        
    }

    render() {
        
        
        return (
            <footer>
                <p> © 2019 Agua e' Panela. All Rights Reserved.</p>
                <div className="socialFooter">
                    <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://twitter.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank"><i className="fab fa-instagram"></i></a>
                </div>
                <button onClick={this.scroll}><i className="fas fa-arrow-alt-circle-up"></i></button>
            </footer>
        )
    }
}
