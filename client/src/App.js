import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './NavBar';
import HomePage from './Components/HomePage';
import VictoryBucket from './Components/Victory/VictoryBucket';
import StruggleBucket from './Components/Struggles/StruggleBucket';
import ImmediateHelp from './Components/ImmediateHelp';
import GroupCode from './Components/GroupCode';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <section>
            <NavBar />
          </section>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/FeelEmpowered" exact component={VictoryBucket} />
            <Route path="/NeedEncouragement" exact component={StruggleBucket} />
            <Route path="/ImmediateHelp" exact component={ImmediateHelp} />
            <Route path="/GroupCode" exact component={GroupCode} />
          </Switch>
          <section className="Footer">
          <section className="asteriskClass">
         <i className="fas fa-asterisk"></i>
         <i className="fas fa-asterisk"></i>
         <i className="fas fa-asterisk"></i>
         </section>
            <header className="footNote"> If you are still in danger, don't forget to not put personal/identifying details! While posts may
              be anonymous, it's still a good idea to clear your browsing history as well.
            </header>
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
