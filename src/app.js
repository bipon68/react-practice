import React from "react";
import ReactDOM from "react-dom";

console.log("React : ", React);
console.log("ReactDOM : ", ReactDOM);

const age = 18;
// let result;
function canVote(){
  if(age == 18){
    return <p>You can vote.</p>
  }
}

const Greeting = () => {
  return(
    <h3>Welcome Bipon! into React World. </h3>
  )
}

const element = React.createElement(
  "div",
  null,
  React.createElement("h2", { id: "hello" }, "Hello World")
);

// const element = <h2 id="hello">Hello World</h2>;
// const anotherElement = React.createElement('div', {className: 'container'}, element)
const anotherElement = <div className="container">

  {element}
  {canVote(age)}
  {age === 18 ? 'Yoo Man. You are Smart.' : 'Hey. You ar small.'}
</div>;

//rendering DOM
ReactDOM.render(<Greeting />, document.getElementById("root"));
console.log(element);
