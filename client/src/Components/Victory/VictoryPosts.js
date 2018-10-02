import React, { Component } from 'react';
import '../../App.css';

class PostedVictory extends Component {
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
        fetch("https://localhost:5001/api/Victory/content")
            .then(resp => resp.json())
            .then(questionData => {
                this.setState({
                    questions: questionData.results
                })
            })
    }
    
    handleChange = (question,i) => {
        console.log({question});
        fetch(`https://localhost:5001/api/Victory/${question.id}`, {
            method: "PATCH",
        })
            .then(resp => resp.json())
            .then(() => {
                this.fetchQuestions();
            });
    };


    render() {
        return (
            <div>
                <section>
                    <h1 className="AllPostsHeader">{this.state.header}</h1>
                </section>
                <section>{this.state.questions.map((question,i) => {
                    return (<section key={question.id}><h1 className="questiontitle">{question.title}</h1>
                        <header className="questionbody">{question.content}</header>
                        <section className="heartvotes"><button className="lovebutton" onClick={() => this.handleChange(question, i)}> 
                            <span role="img" aria-label="heart">💗</span> Cheers!
                        </button>
                        <h1 className="voteCount">{question.upvoteCount}</h1></section>
                    </section>
                    )
                })}
                </section>
            </div>
        )
    }
}

export default PostedVictory;