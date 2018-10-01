import React, { Component } from 'react';
import '../../App.css';
import moment from 'moment'

class Sad extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            writername: '',
            date: new Date(),
            content: "",
            deleteMessage: "",
        };
    }

    componentDidMount() {
        this.getLatest();
    }

    getLatest = () => {
        fetch("https://localhost:5001/api/NeedEncouragement")
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    content: json
                });
            });
    };

    handleSubmit = e => {
        e.preventDefault();
        fetch("https://localhost:5001/api/NeedEncouragement", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Title: this.state.title,
                Author: this.state.writername,
                Date: this.state.date,
                Note: this.state.content,
            })
        })
            .then(resp => resp.json())
            .then(_ => {
                this.getLatest();
            });
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleDeleteEvent = title => {
        fetch(`https://localhost:5001/api/NeedEncouragement/${title.id}`, {
            method: "DELETE"
        })
            .then(resp => resp.json())
            .then(json => {
                this.getLatest();
                if (json.success) {
                    this.setState({ deleteMessage: `${title.writername} was removed` }, () => {
                        setTimeout(() => { this.setState({ deleteMessage: "" }) }, 2500)
                    })
                }
            });
    };
    render() {
        return (
            <div className="App">
                <section className="topofcontext">
                    <form onSubmit={this.handleSubmit}>
                        <span><input className="headofinput" placeholder="Title" onChange={this.handleChange}></input></span>
                        <span><input className="headofinput" placeholder="UserName" onChange={this.handleChange}></input></span>
                        <span><input className="paragraphbox" placeholder="Put Your Story Here!" onChange={this.handleChange}></input></span>
                        <span><button>Submit</button></span>
                    </form>
                </section>
                <h3>{this.state.deleteMessage}</h3>
                <section>
                    {this.state.locations.map(SupportSystem => {
                        return (
                            <div key={SupportSystem.id}>
                                <h3>{SupportSystem.title}</h3>
                                <time>{moment(SupportSystem.date).calendar()}</time>
                                <p>{SupportSystem.content}</p>
                                <button onClick={() => this.handleDeleteEvent(SupportSystem)}>Remove</button>
                            </div>
                        )
                    })},
                </section>
            </div>
        );
    }
}

export default Sad;
