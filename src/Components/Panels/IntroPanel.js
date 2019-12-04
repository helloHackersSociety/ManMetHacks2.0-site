import React, { Component } from 'react'
import $ from 'jquery'
import EventbriteButton from 'react-eventbrite-popup-checkout';

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

    confetii(){
        console.log("Thank you for getting a ticket!");
    }

    render(){
        return (
            <section className="jumbotron">
                <h1>ManMetHacks 2.0</h1>
                <h3>ManMetHacks 2.0 is a <strong>Manchester</strong> based hackathon run out of <strong><a rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/uxZPJYdMb9T5Q9L77" alt="MMU business school location">Manchester Metropolitan University</a></strong> by the HelloHackers society. This years event will be held on the <strong><a target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&tmeid=M2ptdHJua29pcnUxZGV2bHJ1N2swcDMxN2MgdTdkZWllbzd0aHRkc21oOWV1MGpudG03anNAZw&tmsrc=u7deieo7thtdsmh9eu0jntm7js%40group.calendar.google.com" alt="Calender event link" rel="noopener noreferrer">25/01/2020 @ 9am</a></strong>.</h3>
                
                <div className="countdown">
                    <span id="days"></span><p> <strong>days</strong> </p>
                    <span id="hours"></span><p> <strong>hours</strong> </p>
                    <span id="minutes"></span><p> <strong>minutes</strong> </p>
                    <span id="seconds"></span><p> <strong>seconds</strong></p>
                </div>
                
                <EventbriteButton ebEventId='83778637159'>Get Tickets NOW!</EventbriteButton>
                <script src="https://www.eventbrite.co.uk/static/widgets/eb_widgets.js"></script>
            </section>
        )
    }
}



