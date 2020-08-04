import React, { Component } from 'react';
import validator from 'validator';

 class EditContact extends Component {
     state = {
        id: this.props.contact.id,
        firstName: this.props.contact.firstName,
        lastName: this.props.contact.lastName,
        email: this.props.contact.email,
        profession: this.props.contact.profession,
        selectedValue: this.props.contact.selectedValue,
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
        console.log(this.state)
        this.props.updateContact(this.state);
     }

     componentWillReceiveProps(nextProps){
         console.log(nextProps)
         if(nextProps.contact.id !==this.state.id){
             this.setState({
                id: nextProps.contact.id,
                firstName: nextProps.contact.firstName,
                lastName: nextProps.contact.lastName,
                email: nextProps.contact.email,
                profession: nextProps.contact.profession,
                selectedValue: nextProps.contact.selectedValue,
                errors: {}
             })
         }
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
                <p>Contact Form</p>
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
                    <button class="btn waves-effect waves-light" type="submit">Submit</button>
                
                </form>
            </React.Fragment>
        )
    }
}

export default EditContact;
