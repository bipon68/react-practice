import React, {Component} from "react";
import ReactDOM from "react-dom";
import 'babel-polyfill';
// import Example from './Example';
// import Parent from './Parent';
// import Friends from './Friends';
import Header from "../layout/Header";
import Contacts from "./Contacts";
import AddContact from "./AddContact";
import EditContact from './EditContact';
import '../styles/style.css';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

import { Route, Redirect, Switch } from 'react-router-dom';

import Counter from "../Counter";

console.log("React : ", React);
console.log("ReactDOM : ", ReactDOM);
import { ContactContext } from '../../contexts/Contact.context';

//Typechecking With PropTypes - https://reactjs.org/docs/typechecking-with-proptypes.html

class App extends Component {

  static contextType = ContactContext;   


  render(){
    console.log(this.context)
    const {state: {selectedContact}} = this.context
    // const {contacts, selectedContact} = this.context.state
    // const {addContact, editContact, deleteContact, updateContact} = this.context
    return(
      <div className="container">
        <Header />
        <Switch>
          <Route path='/' exact component={Contacts} />
          <Route path='/add' component={AddContact} />
            <Route path='/edit/:id' render={(props) => (
              selectedContact ? (
                <EditContact {...props} />
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
<Route exact path='/' render={(props) => <Contacts {...props} />}/>
            <Route path='/add' render={(props) => <AddContact {...props} />}/>
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
