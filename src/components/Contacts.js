import React, { Component } from 'react';
import SearchInput from './SearchInput';
import Contact from './Contact';

 class Contacts extends Component {
     
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <p>Contacts</p>
                <SearchInput />
                <div className='row'>
                    {
                        this.props.contacts.map(contact => (
                            <div className='col s6' key={contact.id}>
                                <Contact 
                                    contact={contact}
                                    deleteContact={this.props.deleteContact}
                                    editContact={this.props.editContact}
                                />
                            </div>
                        ))
                    }
                    
                </div>
                
            </React.Fragment>
        )
    }
}

export default Contacts;
