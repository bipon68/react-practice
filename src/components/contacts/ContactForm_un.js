import React, { Component } from 'react'

 class ContactForm extends Component {

    constructor(props){
        super(props);
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.email = React.createRef();
        this.profession = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this)
    }

     handleSubmit = (e) => {
        e.preventDefault();
        const myValue = {
            firstName: this.firstName.current.value,
            lastName: this.lastName.current.value,
            email: this.email.current.value,
            profession: this.profession.current.value
          };
          console.log(myValue);
     }

    render() {
        return (
            <React.Fragment>
                <p>Contact Form</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            type="text" 
                            name="firstName" 
                            defaultValue='bipon'
                            ref={this.firstName}
                            />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            type="text" 
                            name="lastName" 
                            defaultValue='biswas'
                            ref={this.lastName}
                            />
                    </div>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="text" 
                            name="email" 
                            defaultValue='bipon770@gmail.com'
                            ref={this.email}
                            />
                    </div>
                    <div className="input-field">
                        <label htmlFor="profession">Profession</label>
                        <input 
                            type="text" 
                            name="profession" 
                            defaultValue='frontend engineer'
                            ref={this.profession}
                            />
                    </div>
                    <button class="btn waves-effect waves-light" type="submit">Submit</button>
                
                </form>
            </React.Fragment>
        )
    }
}

export default ContactForm;
