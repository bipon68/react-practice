import React, { Component } from 'react';
import SearchInput from './SearchInput';
import Contact from './Contact';

 class Contacts extends Component {

    state = {
        searchText: ''
    };
    handleChange = e => {
        this.setState({
          searchText: e.target.value
        });
      }; 

    render() {
        const filteredList = this.props.contacts.filter(
            contact => contact.firstName.toLowerCase().indexOf(this.state.searchText) !== -1 ||
              contact.lastName.toLowerCase().indexOf(this.state.searchText) !== -1
          );
        console.log(this.props)
        return (
            <React.Fragment>
                <p>Contacts</p>
                <nav>
                    <div className='nav-wrapper white'>
                        <form>
                        <div className='input-field'>
                            <input
                                id='search'
                                type='search'
                                value={this.state.searchText}
                                onChange={this.handleChange}
                                placeholder='Search...'
                            />
                            <label className='label-icon' htmlFor='search'>
                            <i className='material-icons'>search</i>
                            </label>
                            <i className='material-icons'>close</i>
                        </div>
                        </form>
                    </div>
                </nav>
                <div className='row'>
                    {
                        // this.props.contacts.map(contact => (
                            filteredList.map(contact => (
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
