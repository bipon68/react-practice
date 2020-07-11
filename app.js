import React from 'react';
import ReactDOM from 'react-dom';

console.log('React : ', React)
console.log('ReactDOM : ', ReactDOM);

const element = React.createElement('div', null, 
    React.createElement('h2', {id: 'hello'}, 'Hello World')
)

// const element = <h2 id="hello">Hello World</h2>;
// const anotherElement = React.createElement('div', {className: 'container'}, element)
const anotherElement = <div className="container">{element}</div>

ReactDOM.render(anotherElement, document.getElementById('root'))
console.log(element)