import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ContactContext } from '../../contexts/Contact.context';

export default class Contact extends Component {

  static contextType = ContactContext;

    state = {
        toggleContact: false
      };

      handleDelete = (id) => async() => {
        console.log(id)
        await fetch(`http://localhost:3000/contacts/${id}`, {
          method: 'DELETE'
        })
        this.context.dispatch({type: 'DELETE_CONTACT', payload: id});
        // this.context.dispatch({type: 'DELETE_CONTACT', payload: id});
        // this.context.deleteContact(id)
        // this.props.deleteContact(id)
      }
      handleToggleContact = () => {
        this.setState({
          toggleContact: !this.state.toggleContact
        })
      }
      handleEdit = (contact) => () => {
        // console.log(id)
        this.context.dispatch({type: 'EDIT_CONTACT', payload : contact})
        // this.context.editContact(id)
        // this.props.editContact(id);
      }


    render() {
        // const { id, firstName, lastName, email, profession } = this.props.contact;
        const { contact, contact: {id, firstName, lastName, email, profession} } = this.props
        return (
            
            <div className='card'>
                    <div className='card-content z-depth-3'>
                        <h6 className='card-title'>
                            {firstName} &nbsp;
                            {lastName}
                        <a href='#!' onClick={this.handleToggleContact}>
                          <i className='material-icons medium right'>
                            {this.state.toggleContact ? 'arrow_drop_up' : 'arrow_drop_down'}
                          </i>
                        </a>
                      <a href='#!' onClick={this.handleDelete(id)}>
                        <i className='material-icons right'>delete</i>
                      </a>
                      <Link to={`/edit/${id}`} onClick={this.handleEdit(contact)}>
                        <i className='material-icons right'>edit</i>
                      </Link>
                        </h6>
                        {this.state.toggleContact && (
                          <ul>
                            <li>{email}</li>
                            <li>{profession}</li>
                        </ul>
                        )}
                        
                    </div>
              </div>
        )
    }
}
