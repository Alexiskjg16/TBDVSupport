import React, { Component } from 'react';
import '../../App.css';
import CreateVictoryPost from './VictoryInput';
import PostedVictory from './VictoryPosts'

class VictoryBucket extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            header: "All Posts",
            questions: [],
        }
    }
    componentDidMount() {
        this.fetchQuestions()
    }
    fetchQuestions = () => {
        fetch("https://tbdvsupport.herokuapp.com/api/Victory/content/content")
            .then(resp => resp.json())
            .then(questionData => {
                this.setState({
                    questions: questionData.results
                })
            })
            
    }


    render() {
        return (
            <div className="App">
            <header className="WhatsYourStory"> What's Your Victory Today? </header>
                <section>
                    <CreateVictoryPost fetchQuestions={this.fetchQuestions}/>
                </section>
                <section>
                    <PostedVictory fetchQuestions={this.fetchQuestions} questions={this.state.questions}/>
                </section>
            </div>
        );
    }
}

export default VictoryBucket;
