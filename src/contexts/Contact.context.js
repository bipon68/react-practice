import React, { Component } from 'react';
export const ContactContext = React.createContext();
export class ContactProvider extends Component {
    render(){
        return(
            <ContactContext.Provider value={{
                firstName: 'Bipon',
                lastName: 'Biswas'
            }}>
                {this.props.children}
            </ContactContext.Provider>
        )
    }
}