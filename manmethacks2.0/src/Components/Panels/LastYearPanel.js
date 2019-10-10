import React, { Component } from 'react'
import foundry from '../../Media/foundry-logo.png'
import github from '../../Media/github-logo.png'
import stickermule from '../../Media/sticker-mule-logo.png'
import wauk from '../../Media/wauk-logo.png'

export default class LastYear extends Component {

    state = {
        sponsorImages: [{
                image: foundry,
                width: 299,
                height: 54,
            },
            {
                image: github,
                width: 249,
                height: 140,
            },
            {
                image: stickermule,
                width: 240,
                height: 140,
            },
            {
                image: wauk,
                width: 398,
                height: 140,
            }
        ]
    }

    render() {
    
        return (
            <section>
                <h2>Version Control</h2>
                <br/>
                <h3>ManMetMacks 1.0</h3>
                <br/>
                <p>Last year at ManMetHacks...</p>
                <br/><br/><br/>
                <h3>Our sponsors</h3>
                <div className="sponsorWrapper">
                {
                    this.state.sponsorImages.map((image) =>
                        <img src={image.image} height={image.height} width={image.width}/>
                    )
                }
                </div>
            </section>
        )
    }
}