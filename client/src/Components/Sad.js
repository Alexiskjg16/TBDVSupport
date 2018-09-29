import React, { Component } from 'react';
import '../App.css';

class Sad extends Component {
    constructor(props) {
        super(props);
        this.state = {
          title: "",
          writername:"",
          date: new Date(),
          content: "",
          deleteMessage: "", 
        };
      }
    
      componentDidMount() {
        this.getLatest();
      }
    
      getLatest = () => {
        fetch("https://localhost:5001/api/SupportSystem")
          .then(resp => resp.json())
          .then(json => {
            this.setState({
              content: json
            });
          });
      };
    
      handleSubmit = e => {
        e.preventDefault();
        fetch("https://localhost:5001/api/SupportSystem", {
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
    
      handleDeleteEvent = location => {
        fetch(`https://localhost:5001/api/SupportSystem/${title.id}`, {
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
                <section>
                    <section className="topofcontext">
                    <span><input className="headofinput" placeholder="Title"></input></span>
                    <span><input className="headofinput" placeholder="UserName"></input></span>
                    </section>
                    <span><input className="paragraphbox" placeholder="Put Your Story Here!"></input></span>
                    <span><button>Submit</button></span>
                </section>
                <section>
                    <h1> Bear in our Struggles </h1>
                    <p className="StoryBox">Previous Stories</p>
                    <p className="StoryBox">Previous Stories</p>
                    <p className="StoryBox">Previous Stories</p>
                </section>
            </div>
        );
    }
}

export default Sad;
