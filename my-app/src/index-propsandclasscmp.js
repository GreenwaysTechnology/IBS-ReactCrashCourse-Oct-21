import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

class Profile extends React.Component {

    render() {
        return <div>
            <h1>Id: {this.props.profile.id}</h1>
            <h2>Name: {this.props.profile.firstName} {this.props.profile.lastName}</h2>
            <h2>Status: {this.props.profile.status ? "Available" : "Not Available"}</h2>
            <h2>Skills</h2>
            <ul>
                {this.props.profile.skills.map((skill, index) => {
                    return <li>
                        <span>{skill.id}</span>  - {skill.name}
                    </li>
                })}
            </ul>
            <address>
                <p>{this.props.profile.address.city} {this.props.profile.address.state} </p>
            </address>
        </div>
    }

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