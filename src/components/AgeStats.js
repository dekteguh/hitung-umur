import React, { Component } from 'react';
import confetti from '../assets/confetti.png';

class AgeStats extends Component {

    timeSince(date) {
        let today = new Date().getTime();
        let other_date = new Date(date).getTime();

        let difference = Math.abs(today - other_date);

        let days = Math.floor(difference / (1000 * 3600 * 24));

        let years = Math.floor(days / 365);
        days -= years * 365;
        let months = Math.floor(days / 31);
        days -= months * 31;

        return `${years} years, ${months} months, and ${days} days`;
    }

    render() {
        return(
            <div>
                <h1>{this.props.date}</h1>
                <h4> Congrats on {this.timeSince(this.props.date)}</h4>
                <img src={confetti} alt="confetti" className="confetti"/>
            </div>
        )
    }
}

export default AgeStats;