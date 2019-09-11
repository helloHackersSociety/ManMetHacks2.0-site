import React, { Component } from 'react'
import foundry from '../../Media/foundry-logo.png'
import github from '../../Media/github-logo.png'
import stickermule from '../../Media/sticker-mule-logo.png'
import wauk from '../../Media/wauk-logo.png'

export default class LastYear extends Component {

    state={
        sponsorImages:[foundry,github,stickermule,wauk]
    }

    render() {
        return (
            <section>
                <h2>Version Control</h2>
                <h3>ManMetMacks 1.0</h3>
                <br/>
                <p>Last year at ManMetHacks...</p>
                <br/><br/><br/>
                <h3>Our sponsors</h3>
                <div className="sponsorWrapper">
                {
                    this.state.sponsorImages.map((image) =>
                        <img src={image} height="90" width="200"/>
                    )
                }
                </div>
            </section>
        )
    }
}
