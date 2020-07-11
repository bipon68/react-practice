console.log('React : ', React)
console.log('ReactDOM : ', ReactDOM);

const element = React.createElement('h2', {id: 'hello'}, 'Hello World');

const anotherElement = React.createElement('div', {className: 'container'}, element)

ReactDOM.render(anotherElement, document.getElementById('root'))
console.log(element)