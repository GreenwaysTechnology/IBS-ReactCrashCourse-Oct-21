//component creational  components
import React from 'react';
import ReactDOM from 'react-dom' //render engine: browser


//jsx compiler error code
// const Heading = () => <h1>Hello React!;
// const  Heading = () =><h1>Hello</h1>
//                       <h2>Hai</h2>

//correct code
// const Heading = () => <div>
//     <h1>Hello</h1>
//     <h2>Hai</h2>
// </div>

//component Name : Should be upper case
/**
 * 
 * index.js:1 Warning: The tag <heading> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.
    at heading
 */
// const heading = () => <div>
//     <h1>Hello</h1>
//     <h2>Hai</h2>
// </div>
const Heading = () => <div>
    <h1>Hello</h1>
    <h2>Hai</h2>
</div>

ReactDOM.render(<Heading />, document.getElementById('root'))