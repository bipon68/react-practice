import React, { Component } from 'react'

 class ContactForm extends Component {
     state = {
         firstName: '',
         lastName: '',
         email: '',
         profession: '',
         selectedValue: 'personal'
     }
     handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
     }
     handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
     }

    render() {
        //console.log(this.state)
        return (
            <React.Fragment>
                <p>Contact Form</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            type="text" 
                            name="firstName" 
                            value={this.state.firstName}
                            onChange={this.handleChange}
                            />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            type="text" 
                            name="lastName" 
                            value={this.state.lastName}
                            onChange={this.handleChange}
                            />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            value={this.state.email}
                            onChange={this.handleChange}
                            />
                    </div>
                    <div className="input-field">
                        <label htmlFor="profession">Profession</label>
                        <input 
                            type="text" 
                            name="profession" 
                            value={this.state.profession}
                            onChange={this.handleChange}
                            />
                    </div>
                    <p>
                        <label>
                            <input type="checkbox" />
                            <span>Red</span>
                        </label>
                    </p>
                    <button class="btn waves-effect waves-light" type="submit">Submit</button>
                
                </form>
            </React.Fragment>
        )
    }
}

export default ContactForm;
