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
                        <a href="https://www.psychologytoday.com/us/groups/hope-lives-here-tampa-fl/127120" target="_blank" rel="noopener noreferrer" className="resourceList"> Hope Lives Here (Tampa) </a>
                        <li className="resourceList"> (727) 312-0626 </li>
                        <a href="https://www.thespring.org/" target="_blank" rel="noopener noreferrer" className="resourceList"> The Spring of Tampa Bay </a>
                        <li className="resourceList"> (813) 247-7233 </li>
                        <a href="https://www.hopefamilyservice.org/" target="_blank" rel="noopener noreferrer" className="resourceList"> Hope Family Services (Bradenton/Palmetto)</a>
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