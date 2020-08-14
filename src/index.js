
import React, {Component} from "react";
import ReactDOM from "react-dom";
import App from './components/contacts/App';

// using ES6 modules
import { BrowserRouter, Route, Link } from "react-router-dom";
// import add, {subtract, multiply, num1, num2} from './playground/math';

// console.log(add(num1,num2))
// console.log(subtract(num1,num2))
// console.log(multiply(num1,num2))

import { ContactProvider, ContactContext } from './contexts/Contact.context';

const router = (
    <BrowserRouter>
        <ContactProvider>
            <App />
        </ContactProvider>
        
    </BrowserRouter>
)

//rendering DOM
ReactDOM.render(router, document.getElementById("root"));