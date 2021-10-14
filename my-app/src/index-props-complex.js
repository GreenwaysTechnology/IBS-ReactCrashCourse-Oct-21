import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

//Props More data

const Profile = props => {
    return <div>
        <h1>Id: {props.profile.id}</h1>
        <h2>Name: {props.profile.firstName} {props.profile.lastName}</h2>
        <h2>Status: {props.profile.status ? "Available" : "Not Available"}</h2>
        <h2>Skills</h2>
        <ul>
            {props.profile.skills.map((skill, index) => {
                return <li>
                    <span>{skill.id}</span>  - {skill.name}
                </li>
            })}
        </ul>
        <address>
            <p>{props.profile.address.city} {props.profile.address.state} </p>
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