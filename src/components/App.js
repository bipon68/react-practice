import React, {Component} from "react";
import ReactDOM from "react-dom";
import Example from './Example';
import Parent from './Parent';
import Friends from './Friends';

console.log("React : ", React);
console.log("ReactDOM : ", ReactDOM);

//Typechecking With PropTypes - https://reactjs.org/docs/typechecking-with-proptypes.html

class App extends Component {
  render() {
    return (
      <div>
        <Example name="Bipon" />
        <Parent country="Bangladesh"/>
        <Friends friends={['Bipon', 'Ankon', 'Mahfuz', 'Shazol']}/>
      </div>
    )
  }
}

export default App;
