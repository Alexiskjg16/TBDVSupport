import React, { Component } from 'react';
import '../App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div>
                <section>
                    <NavBar />
                </section>
                <h1> hello! </h1>
            </div>
        )
    }
}

export default HomePage;