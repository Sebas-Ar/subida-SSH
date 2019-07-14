import React, { Component } from 'react'
import '../styles/Footer.css';

export default class Footer extends Component {

    scroll = () => {
        console.log(window.clientHeight);
        /* window.scrollTo(0, 0); */
    }

    render() {
        return (
            <footer>
                <p> © 2019 BePhoto 2 - BeTheme. All Rights Reserved. <a href="http://localhost:3000/" rel="noopener noreferrer">Muffin group</a></p>
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
