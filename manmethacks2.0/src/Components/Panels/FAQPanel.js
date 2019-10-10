import React, { Component } from 'react'

export default class FAQPanel extends Component {
    
    state={
        questions:[
            {
                id:0,
                title:"Hackathon?",
                response:"A hackathon is an invention marathon. Students come together to build cool software & hardware hacks over 24 hours.",
            },
            {
                id:1,
                title:"Who can attend?",
                response:"To attend as a hacker, you need to be a university student or have left university in the past year. Apologies, but we are unable to accept under 18s. You can also attend as a mentor, e-mail us for more info.",
            },
            {
                id:2,
                title:"I can't code?",
                response:"Not a problem at all. This is a beginner friendly hackathon, with tons of activity planned for you to learn something new and implement it in your hacks.",
            },
            {
                id:3,
                title:"What is the cost?",
                response:"Nothing. Attending a hackathon is absolutely free.",
            },
            {
                id:4,
                title:"What do I bring?",
                response:"Your ticket, student ID, toiletries and a laptop with its charger. That's about it!",
            },
            {
                id:5,
                title:"Is there a CoC?",
                response:"Yes, we follow the MLH Code of Conduct.",
            },

        ]
    }
    
    render() {
        return (
            <section>
                <h2>FAQ's</h2>

                <div className="faqWrapper">
                    {
                        this.state.questions.map(question =>
                            <article key = {question.id}>
                                <h3>{question.title}</h3>
                                <h4>{question.response}</h4>
                            </article>
                        )
                    }
                </div>
            </section>
        )
    }
}
