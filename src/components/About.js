import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                About Us Page {this.props.match.params.bipon}
            </div>
        )
    }
}
