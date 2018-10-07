import React, { Component } from 'react';
import '../../App.css';
import VictoryBucket from './VictoryBucket'
import moment from 'moment'

class PostedVictory extends Component {
    
    handleChange = (question, i) => {
        console.log({ question });
        fetch(`https://localhost:5001/api/Victory/${question.id}`, {
            method: "PATCH",
        })
            .then(resp => resp.json())
            .then(() => {
                this.props.fetchQuestions();
            });
    };
    
    formatDate = (date) => {
        return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    }       

    render() {
        return (
            <div>
                <section>
                    <h1 className="AllPostsHeader">All Posts</h1>
                </section>
                <section className="AllPostedQuestions">{this.props.questions.map((questions, i) => {
                    return (<section key={questions.id}><h1 className="questiontitle">{questions.title}</h1>
                        <header className="questionbody">{questions.content}</header>
                        <header className="datePosted">{this.formatDate(questions.date)}</header>
                        <section>
                          <button className="lovebutton" onClick={() => this.handleChange(questions, i)}>
                             <span role="img" aria-label="heart">💗</span> Cheers to You!
                          </button>
                           <span><h1>{questions.upvoteCount}</h1></span>
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