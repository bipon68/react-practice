import React, {Component} from "react";
import ReactDOM from "react-dom";
import Example from './components/Example';
import Parent from './components/Parent';

console.log("React : ", React);
console.log("ReactDOM : ", ReactDOM);



class App extends Component {
  render() {
    return (
      <div>
        <Example name="Bipon" />
        <Parent country="Bangladesh"/>
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
