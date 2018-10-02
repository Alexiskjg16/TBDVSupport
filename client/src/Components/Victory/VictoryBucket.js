import React, { Component } from 'react';
import '../../App.css';
import CreateVictoryPost from './VictoryInput';
import PostedVictory from './VictoryPosts'

class VictoryBucket extends Component {
    render() {
        return (
            <div className="App">
            <header> What's Your Story? </header>
                <section>
                    <CreateVictoryPost />
                </section>
                <section>
                    <PostedVictory />
                </section>
            </div>
        );
    }
}

export default VictoryBucket;
