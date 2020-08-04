import React, {Component} from "react";
import ReactDOM from "react-dom";
// import Example from './Example';
// import Parent from './Parent';
// import Friends from './Friends';
import Header from "./Header";
import Contacts from "./Contacts";
import AddContact from "./AddContact";
import EditContact from './EditContact';
import './style.css';
import About from './About';

import { Route } from 'react-router-dom';

import Counter from "./Counter";

console.log("React : ", React);
console.log("ReactDOM : ", ReactDOM);

//Typechecking With PropTypes - https://reactjs.org/docs/typechecking-with-proptypes.html

class App extends Component {
  state = {
    contacts: [
      {
        id: 1,
        firstName: 'Bipon',
        lastName: 'Biswas',
        email: 'bipon770@gmail.com',
        profession: 'Web developer',
        selectedValue: 'personal'
      },
      {
        id: 2,
        firstName: 'Sandip',
        lastName: 'Rahman',
        email: 'sr@gmail.com',
        profession: 'Graphics Designer',
        selectedValue: 'professional'
      },
      {
        id: 3,
        firstName: 'Sajib',
        lastName: 'Hasan',
        email: 'sajib@gmail.com',
        profession: 'Php developer',
        selectedValue: 'personal'
      }
    ],
    selectedContact: null
  }

  addContact = (contact) => {
    this.setState({
      // spread this one
      contacts: [...this.state.contacts, contact]
    })
    console.log(contact)
  }
  deleteContact = (id) => {
    const updatedContacts = this.state.contacts.filter(contact => contact.id !==id) 
    this.setState({
      contacts: updatedContacts
    })
  };
  editContact = (id) => {
    console.log(id)
    const fountItem = this.state.contacts.find(contact => contact.id === id);
    this.setState({
      selectedContact: fountItem
    })
  }

 
      updateContact = updateContact => {
        const updatedContacts = this.state.contacts.map(contact =>
                // if(contact.id === updateContact.id){
              //   contact = updateContact
              // }else{
              //   return contact
              // }
          contact.id === updateContact.id ? (contact = updateContact) : contact
        );
        this.setState({
          contacts: updatedContacts,
          selectedContact: null
        });
      };
    


  render(){
    return(
      <div className="container">
      <Header />
          <Route exact path='/' render={(props) => <Contacts 
            contacts={this.state.contacts} 
            deleteContact={this.deleteContact}
            editContact={this.editContact}
            {...props}
            />}/>
            <Route path='/add' render={() => <AddContact />}/>
          <Route path='/about' component={About}/>
      </div>
      // <Counter count={10} />
    )
  }
}

export default App;

//
// <div className="row">
//             <div class="col s4">
//               {this.state.selectedContact ? <EditContact 
//                   contact={this.state.selectedContact} 
//                   updateContact={this.updateContact} /> 
//                 : <AddContact addContact={this.addContact}/> 
//               }
//               </div>
//             <div class="col s8"><Contacts 
//               contacts={this.state.contacts} 
//               deleteContact={this.deleteContact}
//               editContact={this.editContact}
//               />
//             </div>
//           </div>
