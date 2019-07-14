import React, { Component } from 'react'
import '../styles/Detalles.css';
export default class Detalles extends Component {
    render() {
        return (
            <div className="Detalles">
                <h4>DAN McCOY</h4>
                <h4>CONTACT WITH ME</h4>
                <h4>LOCALIZATION</h4>
                <p>Curabitur et massa sed nibh malesuada malesuada a vitae mi.
                    <br /><br /><a href="http://localhost:3000/">Read more</a>
                </p>
                <p>Nullam viverra consectetuer quisque cursus et, porttitor risus.<br /><br />
                    +61 (0) 3 8376 6284<br />
                    noreply@envato.com
                </p>
                <p>Envato <br />
                    Level 13, 2 Elizabeth<br />
                    Victoria 3000 <br />
                    Australia
                </p>
            </div>
        )
    }
}
