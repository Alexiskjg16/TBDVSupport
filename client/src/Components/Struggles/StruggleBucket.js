import React, { Component } from 'react';
import '../../App.css';
import CreateStrugglePost from './StruggleInput';
import PostedStruggle from './StrugglePost';
import brokenHeart from '../Images/brokenheart.jpg'

class StruggleBucket extends Component {

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
        fetch(`${process.env.REACT_APP_API_URL}NE/content`)
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
            <header className="WhatsYourStory"> What's Your Struggle Today? </header>
            <img src={brokenHeart} className="brokenHeartPic" ></img>
                <section>
                    <CreateStrugglePost fetchQuestions={this.fetchQuestions}/>
                </section>
                <section>
                    <PostedStruggle fetchQuestions={this.fetchQuestions} questions={this.state.questions} />
                </section>
            </div>
        );
    }
}

export default StruggleBucket;
