import React, { Component } from 'react';
import '../App.css';
import purpleRibbon from './Images/purpleribbon.jpeg'

class ImmediateHelp extends Component {
    render() {
        return (
            <div className="App">
                <section>
                    <span className="AllhrHelp"> If you are in immediate danger, please call 911! </span>
                    <span className="AllhrHelp"> LOCAL 24HR HELP LINE (941) 755-6805 </span>
                    <span className="AllhrHelp"> NATIONAL 24HR HELP LINE (800) 799-7233 </span>
                </section>
                <section className="immediatecontent">
                    <ul>
                        <h1 className="resourceList"> List of Resources in the Tampa Bay Area: </h1>
                        <li className="resourceList"> Hope Lives Here (Tampa) </li>
                        <li className="resourceList"> (727) 312-0626 </li>
                        <li className="resourceList"> The Spring of Tampa Bay </li>
                        <li className="resourceList"> (813) 247-7233 </li>
                        <li className="resourceList"> Hope Family Services (Bradenton/Palmetto)</li>
                        <li className="resourceList"> (941) 747-8499 </li>
                    </ul>
                    <section>
                        <img src={purpleRibbon} className="mapbox" alt="PurpleRibbon" />
                    </section>
                </section>
            </div>
        )
    }
}

export default ImmediateHelp;