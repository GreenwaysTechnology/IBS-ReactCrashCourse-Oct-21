import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import PropTypes from 'prop-types';

const Greeter = props => {
    //mutate the data : 
  //  props.message = "foo";
    return <h2>{props.message} {props.name} {props.address.city}</h2>
}

//default Props
//ComponentName.defaultProps = {}

Greeter.defaultProps = {
    name: "default Name",
    address: {
        city: "default City"
    },
    message: "greet"
}
//prop validation ; prop constraints
Greeter.propTypes = {
    name: PropTypes.string
};


const App = () => <div className="container">
    <Greeter name="Subramanian" address={{ city: "Coimbatore" }} message="Hello" />

</div>

ReactDOM.render(<App />, document.getElementById('root'));