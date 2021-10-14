//Property Rethrow

import React from 'react';
import ReactDOM from 'react-dom';

const User = props => {

    return <div>
        {/* <UserDetails id={props.id} name={props.name} status={props.status} city={props.city} /> */}
        <UserDetails {...props} title="User Dashboard" />
    </div>
}
const UserDetails = props => {
    return <div>
        <h1>{props.title}</h1>
        <h1>User Id : {props.id}</h1>
        <h2>User Name : {props.name}</h2>
        <h2>User Status: {props.status ? "Available" : "Not Available"}</h2>
        <h2>User City : {props.city}</h2>

    </div>
}
const App = props => <div>
    <User id={1} name={"Subramanian"} status={true} city="Coimbatore" />
</div>

ReactDOM.render(<App />, document.getElementById('root'))