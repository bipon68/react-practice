import React, {Component} from "react";
import ReactDOM from "react-dom";
import Example from './components/Example';
import Parent from './components/Parent';
import Friends from './components/Friends';

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


const element = React.createElement(
  "div",
  null,
  React.createElement("h2", { id: "hello" }, "Hello World")
);


//rendering DOM
ReactDOM.render(<App />, document.getElementById("root"));
// console.log(element);
