import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import LogoMakr from './Components/Images/LogoMakr.png'

class NavBar extends Component {
    render() {
      console.log(process.env)
      return (
        <div className="App">
            <section className="WholeHeader">
            <Link to="/"><img src={LogoMakr} alt="Logo" className="TitleBox"/></Link> 
            {/* this needs to be implimented by a specific organization*/}
            <section className="buttonsforstuff">
            <Link to="/FeelEmpowered" className="VictoryButton">{process.env.REACT_APP_NODE_ENV}I Have a Victory</Link>
            <Link to="/NeedEncouragement" className="StruggleButton">I Have A Struggle</Link>
            <Link to="/ImmediateHelp" className="ImmediateHelp">NEED HELP NOW</Link>
            </section>
            <section className="GroupCode">
            <input placeholder="GroupCode" />
            <Link to="/GroupCode"><button> Submit</button></Link>
            </section>
            </section>
            
          </div>
      )}
    }
    export default NavBar;