import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store" 


// class Header extends React.Component{
//     constructor(props) {
//         super(props) 
//     }

//     render() {
//         return ( 
//             <h1>Todos App</h1> 
//         )
//     };
// }

console.log('we are connected')

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<h1>Todos App</h1>, document.getElementById("root"))
})

