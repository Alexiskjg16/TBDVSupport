import React, { Component } from 'react';
import '../App.css';
import NavBar from '../NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class ImmediateHelp extends Component {
    render() {
        return (
            <div className="App">
                <section>
                    <NavBar />
                </section>
                <h1> hello! </h1>
            </div>
        )
    }
}

export default ImmediateHelp;