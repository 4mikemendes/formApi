import React, { Component } from "react"

class Api extends Component {
    constructor() {
        super()
        this.state = {
            activity: {}
        }
        this.eventHandeler = this.eventHandeler.bind(this)
    }

    eventHandeler() {
        fetch("https://www.boredapi.com/api/activity")
        .then(res => res.json())
        .then(data => {
            this.setState({
                activity: data
            })
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.eventHandeler}>what to do?</button>
                <p>{this.state.firstName} {this.state.lastName} {this.state.activity.activity}</p>
            </div>
        )
    }
}


export default Api