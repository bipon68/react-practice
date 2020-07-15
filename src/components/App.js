import React, {Component} from "react";
import ReactDOM from "react-dom";
// import Example from './Example';
// import Parent from './Parent';
// import Friends from './Friends';
import Header from "./Header";
import Contacts from "./Contacts";
import ContactForm from "./ContactForm";

import Counter from "./Counter";

console.log("React : ", React);
console.log("ReactDOM : ", ReactDOM);

//Typechecking With PropTypes - https://reactjs.org/docs/typechecking-with-proptypes.html

class App extends Component {
  render(){
    return(
      <div className="container">
          <Header />
          <div className="row">
            <div class="col s4"><ContactForm /></div>
            <div class="col s8"><Contacts /></div>
          </div>
      </div>
      // <Counter count={10} />
    )
  }
}

export default App;
