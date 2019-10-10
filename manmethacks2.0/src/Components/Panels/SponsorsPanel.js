import React, { Component } from 'react'
<<<<<<< HEAD
import IoCLogo from '../../Media/IoC-LOGO.png';
import FDMLogo from '../../Media/FDM-Logo.png';
=======
import load from '../../Media/loading.gif'
>>>>>>> 0a1b041f17a4799c5b043df1b7fac97793bb9aea

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
                name: "Community partners",
                sponsors:[
                    {
                        id:0,
                        companyName: "Institue of code",
                        image: IoCLogo,
                        width: 319,
                        height: 84,
                        url:"https://www2.mmu.ac.uk/institute-of-coding/",
                     }
                ],
            },
        ]
    }

    render() {
        return (
            <section>
                <h2>This years sponsors</h2>
<<<<<<< HEAD
                <br/>
                {
                    this.state.tiers.map((tier)=>
                        <TierController currentTier={tier}/>
                    )
                }

=======
                <img className="loading" alt ="loading circle" src={load}></img>
>>>>>>> 0a1b041f17a4799c5b043df1b7fac97793bb9aea
            </section>
        )
    }
}
