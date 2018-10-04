import React, { Component } from 'react';
import '../../App.css';
import moment from 'moment'

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

    handleChange = (question, i) => {
        console.log({ question });
        fetch(`https://localhost:5001/api/Victory/${question.id}`, {
            method: "PATCH",
        })
            .then(resp => resp.json())
            .then(() => {
                this.fetchQuestions();
            });
    };
    
    formatDate = (date) => {
        return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }
            

    render() {
        return (
            <div>
                <section>
                    <h1 className="AllPostsHeader">{this.state.header}</h1>
                </section>
                <section className="AllPostedQuestions">{this.state.questions.map((question, i) => {
                    return (<section key={question.id}><h1 className="questiontitle">{question.title}</h1>
                        <header className="questionbody">{question.content}</header>
                        <header className="datePosted">{this.formatDate(question.date)}</header>
                        <section>
                          <button className="lovebutton" onClick={() => this.handleChange(question, i)}>
                             <span role="img" aria-label="heart">💗</span> Cheers to You!
                          </button>
                           <span><h1>{question.upvoteCount}</h1></span>
                        </section>
                </section>
                    )
                })}
                </section>
            </div>
        )
    }
}

export default PostedVictory;