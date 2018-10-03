import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

class NavBar extends Component {
    render() {
      return (
        <div className="App">
     
            <section>
            <header className="TitleBox"><Link to="/">Tampa Online Support Group For Domestic Violence Survivors</Link></header>
            </section>
            <section className="WholeHeader">
            <section className="EnterSubmit">
              {/* this needs to be implimented by a specific organization*/}
            <input className="GroupCode" placeholder="GroupCode" />
            <Link to="/GroupCode"><button> Submit</button></Link>
            </section>
            <section className="buttonsforstuff">
            <Link to="/FeelEmpowered"><button className="HeaderButton">I Have a Victory</button></Link>
            <Link to="/NeedEncouragement"><button className="HeaderButton">I Have A Struggle</button></Link>
            </section>
            </section>
            <section className="SecondRow">
            <Link to="/ImmediateHelp"><button className="ImmediateHelp">IMMEDIATE HELP</button></Link>
            </section>
          </div>
      )}
    }
    export default NavBar;