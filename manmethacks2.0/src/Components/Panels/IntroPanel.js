import React, { Component } from 'react'
import $ from 'jquery'

export default class IntroPanel extends Component {

    componentDidMount(){
        var countDownDate = new Date("January 25, 2020 09:00:00").getTime();

        var x = setInterval(updateTime, 1000);
        updateTime();

        function updateTime() {
            var now = new Date().getTime();
            var distance = now - now;
            distance = countDownDate - now;

            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            $("#days").html(days);
            $("#hours").html(hours);
            $("#minutes").html(minutes);
            $("#seconds").html(seconds);

            if (distance < 0) {
                clearInterval(x);
                $("#days").html("00");
                $("#hours").html("00");
                $("#minutes").html("00");
                $("#seconds").html("00");
            }
        }
    }

    render(){
        return (
            <section className="jumbotron">
                <h1>ManMetHacks 2.0</h1>
                <p>ManMetHacks 2.0 is a Manchester based hackathon run out of Manchester Metropolitan university by the HelloHackers society.</p>
                
                <div className="countdown">
                    <span id="days"></span><p> <strong>days</strong> </p>
                    <span id="hours"></span><p> <strong>hours</strong> </p>
                    <span id="minutes"></span><p> <strong>minutes</strong> </p>
                    <span id="seconds"></span><p> <strong>seconds</strong></p>
                </div>
            </section>
        )
    }
}
