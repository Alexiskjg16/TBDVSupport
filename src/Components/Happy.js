import React, { Component } from 'react';
import '../App.css';
import NavBar from '../NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
<section>
    <NavBar />
          <section>
            <span><input placeholder="Title"></input></span>
            <span><input placeholder="Put Your Story Here!"></input></span>
            <span><button>Submit</button></span>
          </section>
          <section>
            <p className="StoryBox">Previous Stories</p>
            <p className="StoryBox">Previous Stories</p>
            <p className="StoryBox">Previous Stories</p>
          </section>
          </section>
          </div>
        );
      }
    }
    
    export default App;
