import React, { Component } from 'react';
import '../../App.css';
import CreateStrugglePost from './StruggleInput';
import PostedStruggle from './StrugglePost'

class StruggleBucket extends Component {
    render() {
        return (
            <div className="App">
            <header className="WhatsYourStory"> What's Your Story? </header>
                <section>
                    <CreateStrugglePost />
                </section>
                <section>
                    <PostedStruggle />
                </section>
            </div>
        );
    }
}

export default StruggleBucket;
