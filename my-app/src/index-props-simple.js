import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'


/**
//arg
function Greeter(name,city) {
    return `Hello ${name} you are from ${city}`
}
//parameter
const res = Greeter('subramanian','coimbatore');
console.log(res);

 */
//component function
// function Greeter(arg) {
//     console.log(arg.name,arg.city,arg.message);
//     return <h2>{arg.message}{arg.name}{arg.city}</h2>
// }
// function Greeter(props) {
//     console.log(props.name, props.city, props.message);
//     return <h2>{props.message} {props.name} {props.city}</h2>
// }
const Greeter = props => <h2>{props.message} {props.name} {props.city}</h2>


const name = "karkthik";
const city = "Chennai";
const message = "Welcome";

const App = () => <div className="container">
    <h1>Dynamic UI : Property Pattern</h1>

    {/* Greeter()  */}
    {/* In react you can pass more parameters but all parameters are stored inside one single object */}
    <Greeter name="Subramanian" city="Coimbatore" message="Hello" />
    <Greeter name="A" city="Coimbatore" message="Hello" />
    <Greeter name="B" city="Coimbatore" message="Hello" />
    <Greeter name="C" city="Coimbatore" message="Hello" />
    <Greeter name="D" city="Coimbatore" message="Hello" />
    <Greeter name="E" city="Coimbatore" message="Hello" />
    <Greeter name="F" city="Coimbatore" message="Hello" />
    <Greeter name="G" city="Coimbatore" message="Hello" />
    <Greeter name={name} city={city} message={message} />

</div>





ReactDOM.render(<App />, document.getElementById('root'));