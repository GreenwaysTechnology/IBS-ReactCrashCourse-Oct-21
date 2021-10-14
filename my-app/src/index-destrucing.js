import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

const Profile = props => {
    //object destruring
    const { id, firstName, lastName, skills, status, address: { city, state } } = props.profile;
    const { title } = props;

    return <div>
        <h1>{title}</h1>
        <h1>Id: {id}</h1>
        <h2>Name: {firstName} {lastName}</h2>
        <h2>Status: {status ? "Available" : "Not Available"}</h2>
        <h2>Skills</h2>
        <ul>
            {skills.map(({ id, name }, index) => {
                return <li key={index}>
                    <span>{id}</span>  - {name}
                </li>
            })}
        </ul>
        <address>
            <p>{city} {state} </p>
        </address>
    </div>

};



//profile data
const profile = {
    id: 1,
    firstName: 'Subramanian',
    lastName: 'Murugan',
    status: true,
    address: {
        city: 'Coimbatore',
        state: 'Tamil Nadu'
    },
    skills: [{
        id: 'UI',
        name: 'React'
    }, {
        id: 'MicroServices',
        name: 'Java Quarkus'
    }]
};

const App = () => <div className="container">
    <h1>Dynamic UI : Property Pattern</h1>
    <Profile profile={profile} title="Profile DashBoard" />
    <hr />
    <Profile profile={profile} title="Profile DashBoard" />
    <hr />
    <Profile profile={profile} title="Profile DashBoard" />
</div>

ReactDOM.render(<App />, document.getElementById('root'));