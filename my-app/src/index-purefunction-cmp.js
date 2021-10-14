import React from 'react';
import ReactDOM from 'react-dom';


//is it pure? Yes , why because it is not modifying the object rather , just returns

//Every component is pure function with respect to props.

function Profile(props) {
    return <div>
        <h1>name {props.profile.name}</h1>
    </div>
}

let profile = {
    id: 1,
    name: 'subramanaian',
    address: {
        city: 'chennai'
    }
}
// const newProfile = updateProfile(profile);
// console.log(newProfile);

const App = () => <div>
    <Profile profile={profile} />
</div>



ReactDOM.render(<App />, document.getElementById('root'));