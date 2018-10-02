import React, { Component } from 'react';
import '../../App.css';


class CreateVictoryPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let questionData = {
            "Title": this.state.title,
            "Content": this.state.body,
            "CreatedBy": "anonymous"
        }

        fetch("https://localhost:5001/api/Victory/content/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(questionData)
        })
            .then(resp => resp.json())
            .then(questionData => {
                console.log(questionData)
                this.setState({
                    title: "",
                    body: ""
                })
            })
    }

    render() {
        return (
            <div className="App">
                <section className="topofcontext">
                    <section>
                        <h1>What's Your Story?</h1>
                    </section>
                    <form onSubmit={this.handleSubmit}>
                        <span>
                            <input className="headofinput" placeholder="Title"
                                name="title" value={this.state.title} onChange={this.handleChange}></input>
                        </span>
                        <span>
                            <input className="paragraphbox" placeholder="Put Your Story Here!"
                                name="body" value={this.state.body} onChange={this.handleChange} />
                        </span>
                        <span><button>Submit</button></span>
                    </form>
                </section>
            </div>
        );
    }
}

export default CreateVictoryPost;