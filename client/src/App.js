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
          <section>
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
