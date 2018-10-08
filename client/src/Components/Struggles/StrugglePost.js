import React, { Component } from 'react';
import '../../App.css';
import moment from 'moment';

class PostedStruggle extends Component {
    
    handleChange = (question, i) => {
        console.log({question});
        fetch(`${process.env.REACT_APP_API_URL}NE/${question.id}`, {
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
                <section className="AllPostedQuestions">{this.props.questions.map((question,i) => {
                    return (<section key={question.id}><h1 className="questiontitle">{question.title}</h1>
                        <div className="questionbody">{question.content}</div>
                        <header className="datePosted">{this.formatDate(question.date)}</header>
                        <section><button className="lovebutton" onClick={() => this.handleChange(question, i)}> 
                            <span role="img" aria-label="heart">💗</span> I Feel Ya
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

export default PostedStruggle;