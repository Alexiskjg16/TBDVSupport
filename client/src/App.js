import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import VictoryBucket from './Components/Victory/VictoryBucket';
import StruggleBucket from './Components/Struggles/StruggleBucket';
import ImmediateHelp from './Components/ImmediateHelp'

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
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
