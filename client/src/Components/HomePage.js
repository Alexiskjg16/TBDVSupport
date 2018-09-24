import React, { Component } from 'react';
import '../App.css';

class HomePage extends Component {
    render() {
        return (
            <div className="AboutHome">

                <p className="AboutCreator"> Welcome to SupportResource, a webpage dedicated to helping those effected by domestic violence.
                    On these pages you can click "I Want to Share the Good" to share your successes and victories in your journey,
                    or on "I Need to Share the Bad" you can let us know your story or a struggle you are having. These posts are public,
                    so be cautious with specific details, but take comfort in reading others' stories and knowing that you are NOT alone. </p>
                <p className="AboutCreator"> About the creator: I was in a domestic violence relationship for seven years, married for nearly five. In addition
                    to occasional physical violence, my partner was controlling, verbally abusive, and manipulative. When I finally took
                    the jump to get out of the relationship, it took a major toll on me in more ways than one. But with the help of a local
                    organization, I was able to attend therapy and receive the support I needed to get back on my own feet. The only
                    complaint was that I couldn't always meet with them once a week at the scheduled time, between being a mother and having
                    a full time job and such. So I created this page as a way for women to still get to share and commiserate with each other,
                        without having to leave the comfort of their own beds. </p>
            </div>
        )
    }
}

export default HomePage;