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
          
            <Link to="/FeelEmpowered" className="VictoryButton">{process.env.REACT_APP_NODE_ENV}I Have a Victory</Link>
            <Link to="/NeedEncouragement" className="StruggleButton">I Have A Struggle</Link>
            <Link to="/ImmediateHelp" className="ImmediateHelp">NEED HELP NOW</Link>
            </section>
         
            
          </div>
      )}
    }
    export default NavBar;