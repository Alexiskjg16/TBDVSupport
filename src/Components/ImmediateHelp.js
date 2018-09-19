import React, { Component } from 'react';
import '../App.css';
import NavBar from '../NavBar';

class ImmediateHelp extends Component {
    render() {
        return (
            <div className="App">
                <section className="immediatecontent">
                    <ul>
                        <li> list of resources </li>
                        <li> in the Tampa Bay Area </li>
                    </ul>
                    <section className="mapbox">
                        <p> There will be a map here </p>
                    </section>
                </section>
            </div>
        )
    }
}

export default ImmediateHelp;