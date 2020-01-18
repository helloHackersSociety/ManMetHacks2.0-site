import React, { Component } from 'react'

import TwitterLink from '../Links/TwitterLink';
import GitHubLink from '../Links/GitHubLink';
import WebsiteLink from '../Links/WebsiteLink';

export default class TeamPanel extends Component {

    state = {
        teamMembers:[
            {
                id:0,
                position: "Chair",
                name:"George Drakos",
                github:"https://github.com/GeorgeDrakos",
                twitter: "https://twitter.com/_GeorgiosDrakos",
                picture:"https://avatars2.githubusercontent.com/u/32499221?s=460&v=4"
            },
            {
                id:1,
                position: "Vice Chair",
                name:"Iqrah Nadeem",
                github:"https://github.com/iiqrah",
                picture:"https://avatars2.githubusercontent.com/u/21157720?s=460&v=4",
                twitter:"https://twitter.com/i_iqrah",
            },
            {
                id:2,
                position: "Treasurer",
                name:"Tom Misson",
                github:"https://github.com/tomMisson",
                picture:"https://avatars0.githubusercontent.com/u/9392830?s=460&v=4",
                twitter:"https://twitter.com/thomas_misson",
                website:"https://thomas.misson.info"
            },
            {
                id:3,
                position: "Events Organiser",
                name:"Fahad Quraishi",
                github:"https://github.com/FahadQ",
                picture:"https://avatars3.githubusercontent.com/u/30301004?s=460&v=4",
            },
        ]
    }

    render() {
        return (
            <section>
                <h2>helloHackers Society</h2>
                <h4>The society was founded in September 2018. It strives to build the hacker community at the university. It has four committee members as of now. We run workshops, talks and are really excited to host our second hackathon.</h4>

                <button type="button"><a rel="noopener noreferrer" target="_blank" href="https://www.theunionmmu.org/groups/hellohackers-society" alt="membership page for mmu students">Join us!</a></button>
                <h3><strong>The Team</strong></h3>
                <div className="teamWrapper">
                {
                    this.state.teamMembers.map((profile) => 
                    
                        <article key={profile.id} className="profile">
                            <img src={profile.picture} alt={profile.name} height="200" width="200"></img>
                            <h3>{profile.name}</h3>
                            <h4>{profile.position}</h4>
                            <TwitterLink link={profile.twitter}/>
                            <GitHubLink link={profile.github}/>
                            <WebsiteLink link={profile.website}/>
                        </article>
                    )         
                    
                }
                </div>
            </section>
        )
    }
}
