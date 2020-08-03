import React, {Component} from "react";
import ReactDOM from "react-dom";
// import Example from './Example';
// import Parent from './Parent';
// import Friends from './Friends';
import Header from "./Header";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";
import './style.css';

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
        email: 'kh@gmail.com',
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

  render(){
    return(
      <div className="container">
          <Header />
          <div className="row">
            <div class="col s4"><ContactForm addContact={this.addContact}/></div>
            <div class="col s8"><Contacts contacts={this.state.contacts} /></div>
          </div>
      </div>
      // <Counter count={10} />
    )
  }
}

export default App;
