import React, { Component } from 'react';
import validator from 'validator';
import { ContactContext } from '../../contexts/Contact.context';

 class EditContact extends Component {
    static contextType = ContactContext;
     state = {
        // id: this.props.contact.id,
        id: this.context.state.selectedContact.id,
        firstName: this.context.state.selectedContact.firstName,
        lastName: this.context.state.selectedContact.lastName,
        email: this.context.state.selectedContact.email,
        profession: this.context.state.selectedContact.profession,
        selectedValue: this.context.state.selectedContact.selectedValue,
        errors: {}
     }
     handleSubmit = async (e) => {
        e.preventDefault();
        if(this.state.firstName === '' || !validator.isLength(this.state.firstName, {min: 3})){
            this.setState({
                errors: {
                    firstName: 'Please provide firstname min 3 character'
                }
            })
            return;
        }
        if(this.state.lastName === ''){
            this.setState({
                errors: {
                    lastName: 'Please provide last name'
                }
            })
            return;
        }
        if (this.state.email === '' || !validator.isEmail(this.state.email)) {
            this.setState({
                errors: {
                    email: 'Please provide email name'
                }
            })
            return;
        }
        if (this.state.profession === '') {
            this.setState({
              errors: {
                profession: 'please provide profession'
              }
            });
            return;
          }
          // rest operator
          const { id, errors, ...updatedContact } = this.state;
        //   console.log(updatedContact);
          const contact = await fetch(`http://localhost:3000/contacts/${this.state.id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(updatedContact)
            }).then(data => data.json())
            console.log(contact)
        // console.log(this.state)
        // this.context.updateContact(this.state);
        // this.context.dispatch({type: 'UPDATE_CONTACT', payload: this.state});
        this.context.dispatch({type: 'UPDATE_CONTACT', payload: contact});
        this.props.history.push('/');
     }


     handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
     }
     

    render() {
        console.log(this.state)
        const {firstName,lastName,email,profession,selectedValue,errors} = this.state;
        return (
            <React.Fragment>
            <h3>Edit Contact</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="firstName" 
                            value={firstName}
                            onChange={this.handleChange}
                            />
                            <span className='helper-text'>
                                {errors.firstName && errors.firstName}
                            </span>
                    </div>
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="lastName" 
                            value={lastName}
                            onChange={this.handleChange}
                            />
                            <span className='helper-text'>
                                {errors.lastName && errors.lastName}
                            </span>
                    </div>
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="email" 
                            value={email}
                            onChange={this.handleChange}
                            />
                            <span className='helper-text'>
                                {errors.email && errors.email}
                            </span>
                    </div>
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="profession" 
                            value={profession}
                            onChange={this.handleChange}
                            />
                            <span className='helper-text'>
                                {errors.profession && errors.profession}
                            </span>
                    </div>
                    <p>
                        <label>
                            <input 
                                name="selectedValue" 
                                type="radio" 
                                value='personal'
                                onChange={this.handleChange}
                                checked={selectedValue === 'personal'}
                            />
                            <span>Personal</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input 
                                name="selectedValue" 
                                type="radio" 
                                value='professional'
                                onChange={this.handleChange}
                                checked={selectedValue === 'professional'}
                                />
                            <span>Professional</span>
                        </label>
                    </p>
                    <button className="btn waves-effect waves-light" type="submit">Submit</button>
                
                </form>
            </React.Fragment>
        )
    }
}

export default EditContact;
