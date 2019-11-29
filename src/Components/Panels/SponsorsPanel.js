import React, { Component } from 'react';
import FDMLogo from '../../Media/FDM-Logo.png';
import IoCLogo from '../../Media/IoC-LOGO.png';
import TierController from '../TierController';
import KoderlyLogo from '../../Media/Koderly-logo.png';
import JetBrainsLogo from '../../Media/jetbrains-logo.png';
import LevitationEventsLogo from '../../Media/levitation-events.png';
import GitHubLogo from '../../Media/github-logo.png';

export default class Sponsors extends Component {

    state = {
        tiers:[
            {
                tierID: 0,
                name: "Platinum",
                sponsors:[
                   
                ],
            },
            {
                tierID: 1,
                name: "Gold",
                sponsors:[
                    {
                        id:0,
                        companyName: "Koder.ly",
                        image: KoderlyLogo,
                        width: 674,
                        height: 168,
                        url:"https://www.koder.ly/",
                    }
                ],
            },
            {
                tierID: 2,
                name: "Silver",
                sponsors:[
                   {
                       id:0,
                       companyName: "FDM group",
                       image: FDMLogo,
                       width: 213,
                       height: 128,
                       url:"https://www.fdmgroup.com/careers/graduates",
                    },
                    
                    {
                       id:1,
                       companyName: "GitHub",
                       image: GitHubLogo,
                       width: 200,
                       height: 54,
                       url:"https://education.github.com/",
                    }
                ],
            },
            {
                tierID: 3,
                name: "Bronze",
                sponsors:[
                   
                ],
            },
            {
                tierID: 4,
                name: "Community Partners",
                sponsors:[
                    {
                        id:0,
                        companyName: "Institute of Coding",
                        image: IoCLogo,
                        width: 319,
                        height: 84,
                        url:"https://www2.mmu.ac.uk/institute-of-coding/",
                    }, 
                    
                    {
                        id:1,
                        companyName: "JetBrains",
                        image: JetBrainsLogo,
                        width: 150,
                        height: 159,
                        url:"https://www.jetbrains.com/student/",
                    },
                    {
                        id:2,
                        companyName: "Levitation Events",
                        image: LevitationEventsLogo,
                        width: 319,
                        height: 62,
                        url:"https://levitationevents.co.uk/",

                    }
                ],
            },
        ]
    }

    render() {
        return (
            <section>
                <h2>This years sponsors</h2>
                <br/>
                {
                    this.state.tiers.map((tier)=>
                        <TierController key={tier.tierID} currentTier={tier}/>
                    )
                }

            </section>
        )
    }
}
