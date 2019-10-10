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
                <p>Last year was our first edition of our 24 hour student hackathon in Manchester Metropolitan University. We hosted around 100 student hackers from all over Europe. Together, they met to code, design and build innovative technological solutions.
                </p>
                <h3>Our sponsors</h3>
                <div className="sponsorWrapper">
                {
                    this.state.sponsorImages.map((image) =>
<<<<<<< HEAD
                        <img src={image.image} height={image.height} width={image.width}/>
=======
                        <img key={image} src={image} height="90" width="200"/>
>>>>>>> 0a1b041f17a4799c5b043df1b7fac97793bb9aea
                    )
                }
                </div>
            </section>
        )
    }
}