import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class NavBar extends Component {
    render() {
      return (
        <div className="App">
          <section className="WholeHeader">
            <section className="TopRow">
            <header className="TitleBox"><Link to="/">SupportResource</Link></header>
            <button className="HeaderButton"><Link to="/FeelEmpowered">I Want to Share Good!</Link></button>
            <button className="HeaderButton"><Link to="/NeedEncouragement">I Need to Share Bad</Link></button>
            </section>
            <section className="SecondRow">
            <span className="MissionBox"> 24 HR HELP LINE  (941) 755-6805</span>
            <button className="ImmediateHelp"><Link to="/ImmediateHelp">IMMEDIATE HELP</Link></button>
            </section>
          </section>
          </div>
      )}
    }
    export default NavBar;