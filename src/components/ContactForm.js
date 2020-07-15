import React, { Component } from 'react'

 class ContactForm extends Component {
    render() {
        return (
            <React.Fragment>
                <p>Contact Form</p>
                <form>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" />
                    </div>
                    <div className="input-field">
                        <label htmlFor="profession">Profession</label>
                        <input type="text" name="profession" />
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
