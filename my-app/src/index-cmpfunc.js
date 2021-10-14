//component creational  components
import React from 'react';
import ReactDOM from 'react-dom' //render engine: browser


//functions 
// function Heading(){
//     return <h1>Hello React!</h1>
// }

//arrow 
// const Heading = () => {
//     return <h1>Hello React!</h1>;
// }
const Heading = () => <h1>Hello React!</h1>;

//imperative style
// ReactDOM.render(Heading(),document.getElementById('root'))

//declarative 
ReactDOM.render(<Heading></Heading>, document.getElementById('root'))