import React, { Component } from 'react';
import '../../App.css';

class PostedVictory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: "All Posts",
            questions: []
        }
    }
    componentDidMount() {
        this.fetchQuestions()
    }
    fetchQuestions = () => {
        fetch("https://localhost:5001/api/IFeelEmpowered")
            .then(resp => resp.json())
            .then(questionData => {
                this.setState({
                    questions: questionData.results
                })
            })
    }

    render() {
        return (
            <div>
                <section>
                    <h1>{this.state.header}</h1>
                </section>
                <section>{this.state.questions.map(question => {
                    return (<div>{ShareAVictory.Title}
                        {ShareAVictory.Content}</div>
                    )
                })}
                </section>
            </div>
        )
    }
}

export default PostedVictory;