console.log('React : ', React)
console.log('ReactDOM : ', ReactDOM);

// const anotherElement = React.createElement('div', {class: 'container', element})

const element = React.createElement('h2', {id: 'hello'}, 'Hello World');
ReactDOM.render(element, document.getElementById('root'))
console.log(element)