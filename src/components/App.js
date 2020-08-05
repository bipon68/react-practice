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
import NotFound from './NotFound';

import { Route, Redirect, Switch } from 'react-router-dom';

import Counter from "./Counter";

console.log("React : ", React);
console.log("ReactDOM : ", ReactDOM);
import { ContactContext } from '../contexts/Contact.context';

//Typechecking With PropTypes - https://reactjs.org/docs/typechecking-with-proptypes.html

class App extends Component {

  static contextType = ContactContext;

  // state = {
  //   contacts: [
  //     {
  //       id: 1,
  //       firstName: 'Bipon',
  //       lastName: 'Biswas',
  //       email: 'bipon770@gmail.com',
  //       profession: 'Web developer',
  //       selectedValue: 'personal'
  //     },
  //     {
  //       id: 2,
  //       firstName: 'Sandip',
  //       lastName: 'Rahman',
  //       email: 'sr@gmail.com',
  //       profession: 'Graphics Designer',
  //       selectedValue: 'professional'
  //     },
  //     {
  //       id: 3,
  //       firstName: 'Sajib',
  //       lastName: 'Hasan',
  //       email: 'sajib@gmail.com',
  //       profession: 'Php developer',
  //       selectedValue: 'personal'
  //     }
  //   ],
  //   selectedContact: null
  // }

 
    


  render(){
    console.log(this.context)
    const {state: {contacts, selectedContact}, addContact, editContact, deleteContact, updateContact} = this.context
    // const {contacts, selectedContact} = this.context.state
    // const {addContact, editContact, deleteContact, updateContact} = this.context
    return(
      <div className="container">
        <Header />
        <Switch>
          <Route exact path='/' render={(props) => <Contacts 
            contacts={contacts} 
            deleteContact={deleteContact}
            editContact={editContact}
            {...props}
            />}/>
            <Route path='/add' render={(props) => <AddContact addContact={addContact} {...props} />}/>
            <Route path='/edit/:id' render={(props) => (
              selectedContact ? (
                <EditContact
                    contact={selectedContact}
                    updateContact={updateContact}
                    {...props}
            />
              ) : (<Redirect to='/' />)
            )}/>

          <Route path='/about' component={About}/>
          <Route component={NotFound} />
        </Switch>
          
      </div>
      // <Counter count={10} />
    )
  }
}

export default App;
/*

*/
//
// <div className="row">
//             <div class="col s4">
              // {this.state.selectedContact ? <EditContact 
              //     contact={this.state.selectedContact} 
              //     updateContact={this.updateContact} /> 
              //   : <AddContact addContact={this.addContact}/> 
              // }
//               </div>
//             <div class="col s8"><Contacts 
//               contacts={this.state.contacts} 
//               deleteContact={this.deleteContact}
//               editContact={this.editContact}
//               />
//             </div>
//           </div>
