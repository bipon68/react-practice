import React, {Component} from "react";
import ReactDOM from "react-dom";
// import Example from './Example';
// import Parent from './Parent';
// import Friends from './Friends';

import Contacts from "./Contacts";
import ContactForm from "./ContactForm";

import Counter from "./Counter";

console.log("React : ", React);
console.log("ReactDOM : ", ReactDOM);

//Typechecking With PropTypes - https://reactjs.org/docs/typechecking-with-proptypes.html

class App extends Component {
  render(){
    return(
      <React.Fragment>
          <h3>Our app works</h3>
          <ContactForm />
          <Contacts />
      </React.Fragment>
      // <Counter count={10} />
    )
  }
}

export default App;
