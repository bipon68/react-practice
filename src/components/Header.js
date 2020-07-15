import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper spacing">
                        <a href="#" class="brand-logo">Contact App</a>
                        <ul id="nav-mobile" class="right hide-on-med-and-down">
                            <li><a href="#!">Home</a></li>
                            <li><a href="#!">About</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;