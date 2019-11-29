import React, { Component } from 'react'
import foundry from '../../Media/foundry-logo.png'
import github from '../../Media/github-logo.png'
import stickermule from '../../Media/sticker-mule-logo.png'
import wauk from '../../Media/wauk-logo.png'

export default class LastYear extends Component {

    state = {
        sponsorImages: [{
                id: 0,
                image: foundry,
                width: 299,
                height: 54,
            },
            {
                id: 1,
                image: github,
                width: 250,
                height: 65,
            },
            {
                id: 2,
                image: stickermule,
                width: 513,
                height: 71,
            },
            {
                id: 3,
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
                <p>Last year was our first edition of our 24 hour student hackathon in Manchester Metropolitan University. We hosted around 100 student hackers from all over Europe. Together, they met to code, design and build innovative technological solutions.</p>
                <br/>
                <br/>
                <h3>Our sponsors</h3>
                <div className="sponsorWrapper">
                {
                    this.state.sponsorImages.map((image) =>
                        <img alt="last years sponsor" key={image.id} src={image.image} className="sponsorImage" height={image.height} width={image.width}/>
                    )
                }
                </div>
            </section>
        )
    }
}