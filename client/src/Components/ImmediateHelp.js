import React, { Component } from 'react';
import '../App.css';

class ImmediateHelp extends Component {
    render() {
        return (
            <div className="App">
                <section>
                    <span className="AllhrHelp"> 24 HR HELP LINE  (941) 755-6805 </span>
                </section>
                <section className="immediatecontent">

                    <ul>
                        <li> List of Resources in the Tampa Bay Area </li>
                        <li> Hope Lives Here </li>
                        <li> (727) 312-0626 </li>
                        <li> Recovery Speaks </li>
                        <li> (727) 365-8288 </li>
                        <li> Hope Family Services </li>
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