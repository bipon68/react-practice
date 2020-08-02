import React, { Component } from 'react';
import SearchInput from './SearchInput';
import Contact from './Contact';

 class Contacts extends Component {
    render() {
        return (
            <React.Fragment>
                <p>Contacts</p>
                <SearchInput />
                <Contact />
            </React.Fragment>
        )
    }
}

export default Contacts;
