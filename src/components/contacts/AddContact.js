import React, { Component } from 'react';
import validator from 'validator';
// import uuid from 'uuid/v4';
// import { v4 as uuidv4 } from 'uuid';
// 
// const { v4: uuidV4 } = require('uuid');
import { uuid } from 'uuidv4';
import { ContactContext } from '../../contexts/Contact.context';



 class AddContact extends Component {
    static contextType = ContactContext;
     state = {
         id: uuid(),
         firstName: '',
         lastName: '',
         email: '',
         profession: '',
         selectedValue: 'personal',
         errors: {}
     }
     handleSubmit = (e) => {
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
        // console.log(this.state)
        // this.context.addContact(this.state);
        this.context.dispatch({type: 'ADD_CONTACT', payload: this.state});
        this.props.history.push('/');

     }
     handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
     }
     

    render() {
        console.log(this.state)
        const {firstName,lastName,email,profession,errors} = this.state;
        return (
            <React.Fragment>
            <h3>Add Contact</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            type="text" 
                            name="firstName" 
                            value={this.state.firstName}
                            onChange={this.handleChange}
                            />
                            <span className='helper-text'>
                                {errors.firstName && errors.firstName}
                            </span>
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            type="text" 
                            name="lastName" 
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            />
                            <span className='helper-text'>
                                {errors.lastName && errors.lastName}
                            </span>
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            value={this.state.email}
                            onChange={this.handleChange}
                            />
                            <span className='helper-text'>
                                {errors.email && errors.email}
                            </span>
                    </div>
                    <div className="input-field">
                        <label htmlFor="profession">Profession</label>
                        <input 
                            type="text" 
                            name="profession" 
                            value={this.state.profession}
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
                                checked={this.state.selectedValue === 'personal'}
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
                                checked={this.state.selectedValue === 'professional'}
                                />
                            <span>Professional</span>
                        </label>
                    </p>
                    <button class="btn waves-effect waves-light" type="submit">Submit</button>
                
                </form>
            </React.Fragment>
        )
    }
}

export default AddContact;
