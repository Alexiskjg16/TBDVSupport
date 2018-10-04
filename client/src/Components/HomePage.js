import React, { Component } from 'react';
import '../App.css';
import domesticViolence from './Images/domestic-violence.jpg';

class HomePage extends Component {
    render() {
        return (
            <div className="AboutHome">
                <h1> October is Domestic Violence Awareness Month!</h1>
                <img src={domesticViolence} className="mainImg" alt="SpeakUp"/>
                <p className="AboutCreator"> Welcome to the Domestic Violence Online Support Group, a webpage 
                dedicated to helping those effected by domestic violence. On these pages you can click "I Have 
                A Victory" to share your successes and victories in your journey, or on "I Have A Struggle" you
                can let us know your story or a struggle you are having. Even though there's no usernames to keep 
                our users anonymous, these posts are public, so be cautious with specific details, but take 
                comfort in reading others' stories and knowing that you are NOT alone. </p>
            </div>
        )
    }
}

export default HomePage;