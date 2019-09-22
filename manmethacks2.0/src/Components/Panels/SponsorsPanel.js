import React, { Component } from 'react'
import load from '../../Media/loading.gif'

export default class Sponsors extends Component {
    render() {
        return (
            <section>
                <h2>This years sponsors</h2>
                <img className="loading" alt ="loading circle" src={load}></img>
            </section>
        )
    }
}
