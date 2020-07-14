import React, {Component} from "react";
import ReactDOM from "react-dom";
// import Example from './Example';
// import Parent from './Parent';
// import Friends from './Friends';

import Counter from "./Counter";

console.log("React : ", React);
console.log("ReactDOM : ", ReactDOM);

//Typechecking With PropTypes - https://reactjs.org/docs/typechecking-with-proptypes.html

const App = () => {
  return(
    <Counter count={10} />
  )
}

export default App;
