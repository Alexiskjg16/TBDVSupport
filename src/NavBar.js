import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import './App.css';

class NavBar extends Component {
    render() {
      return (
        <div className="App">
          <section className="WholeHeader">
            <section className="TopRow">
            <header className="TitleBox"> SupportResource </header>
            <button className="HeaderButton"><Link to="/FeelEmpowered">I Feel Empowered!</Link></button>
            <button className="HeaderButton"><Link to="/NeedEncouragement">I Need Encouragement</Link></button>
            </section>
            <section className="SecondRow">
            <span className="MissionBox"> mission statement </span>
            <button className="ImmediateHelp"><Link to="/ImmediateHelp">IMMEDIATE HELP</Link></button>
            </section>
          </section>
          </div>
      )}
    }
    export default NavBar;