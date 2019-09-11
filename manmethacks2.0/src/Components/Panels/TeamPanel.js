import React, { Component } from 'react'
import iqrahpic from '../../Media/iqrah.jpg'
import tompic from '../../Media/tom.jpg'
import profile from '../../Media/profile.png'

export default class TeamPanel extends Component {

    state = {
        teamMembers:[
            {
                id:0,
                position: "Chair",
                name:"George Drakos",
                github:"https://github.com/GeorgeDrakos",
                twitter: "https://twitter.com/_GeorgiosDrakos",
                picture:profile
            },
            {
                id:1,
                position: "Vice Chair",
                name:"Iqrah Nadeem",
                github:"https://github.com/iiqrah",
                picture:iqrahpic,
                twitter:"https://twitter.com/i_iqrah",
            },
            {
                id:2,
                position: "Treasurer",
                name:"Tom Misson",
                github:"https://github.com/tomMisson",
                picture:tompic,
                twitter:"https://twitter.com/thomas_misson",
                website:"https://thomas.misson.info"
            },
            {
                id:3,
                position: "Events organiser",
                name:"Fahad Quraishi",
                github:"https://github.com/FahadQ",
                picture:profile,
            },
        ]
    }

    render() {
        return (
            <section>
                <h2>Team</h2>
                <div className="teamWrapper">
                {
                    this.state.teamMembers.map((profile) => 
                    
                        <article key={profile.id}>
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
