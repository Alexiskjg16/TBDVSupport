import React, { Component } from 'react';
import '../App.css';
import breakTheSilence from './Images/breakTheSilence.png';

class HomePage extends Component {
    render() {
        return (
            <div className="AboutHome">
                <img src={breakTheSilence} className="mainImg" alt="SpeakUp"/>
                <p className="AboutCreator"> This is a online-based support group, a webpage 
                dedicated to helping those affected by domestic violence. On these pages you can click "I Have 
                A Victory" to share your successes and victories in your journey, or on "I Have A Struggle" you
                can let us know your story or a struggle you are having. Even though there's no usernames to keep 
                our users anonymous, these posts are public, so be cautious with specific details, but take 
                comfort in reading others' stories and knowing that you are NOT alone. </p>
                <p className="LogomakrCredit">Logo created using LogoMakr</p>
            </div>
        )
    }
}

export default HomePage;