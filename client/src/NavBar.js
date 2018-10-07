import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import LogoMakr from './Components/Images/LogoMakr.png'

class NavBar extends Component {
    render() {
      return (
        <div className="App">
            <section className="WholeHeader">
            <section className="EnterSubmit">
              {/* this needs to be implimented by a specific organization*/}
            <input className="GroupCode" placeholder="GroupCode" />
            <Link to="/GroupCode"><button> Submit</button></Link>
            </section>
            <section className="buttonsforstuff">
            <Link to="/FeelEmpowered"><button className="VictoryButton">I Have a Victory</button></Link>
            <Link to="/"><img src={LogoMakr} alt="Logo" className="TitleBox"/></Link>
            <Link to="/NeedEncouragement"><button className="StruggleButton">I Have A Struggle</button></Link>
            </section>
            </section>
            <section className="SecondRow">
            <Link to="/ImmediateHelp"><button className="ImmediateHelp">IMMEDIATE HELP</button></Link>
            </section>
          </div>
      )}
    }
    export default NavBar;