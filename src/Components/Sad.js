import React, { Component } from 'react';
import '../App.css';
import NavBar from '../NavBar';

class Sad extends Component {
    render() {
        return (
            <div className="App">
                <section>
                    <span><input className="headofinput" placeholder="Title"></input></span>
                    <span><input className="paragraphbox" placeholder="Put Your Story Here!"></input></span>
                    <span><button>Submit</button></span>
                </section>
                <section>
                    <p className="StoryBox">Previous Stories</p>
                    <p className="StoryBox">Previous Stories</p>
                    <p className="StoryBox">Previous Stories</p>
                </section>
            </div>
        );
    }
}

export default Sad;
