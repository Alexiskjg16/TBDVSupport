import React, { Component } from 'react';
import '../App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <section>
                    <section className="topofcontext">
                    <span><input className="headofinput" placeholder="Title"></input></span>
                    <span><input className="headofinput" placeholder="UserName"></input></span>
                    </section>
                    <span><input className="paragraphbox" placeholder="Put Your Story Here!"></input></span>
                    <span><button>Submit</button></span>
                </section>
                <section>
                    <h1> Read the Good Stuff! </h1>
                    <p className="StoryBox">Previous Stories</p>
                    <p className="StoryBox">Previous Stories</p>
                    <p className="StoryBox">Previous Stories</p>
                </section>
            </div>
        );
    }
}

export default App;
