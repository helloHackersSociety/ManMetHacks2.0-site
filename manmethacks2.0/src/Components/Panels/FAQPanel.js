import React, { Component } from 'react'

export default class FAQPanel extends Component {
    
    state={
        questions:[
            {
                title:"Question 1",
                response:"A response",
            },
            {
                title:"Question 2",
                response:"Another response",
            },
            {
                title:"Question 3",
                response:"Even more questions",
            },
            {
                title:"Question 4",
                response:"Even more questions",
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
                            <article>
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
