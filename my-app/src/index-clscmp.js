//component creational  components
import React from 'react';
import ReactDOM from 'react-dom' //render engine: browser


class Heading extends React.Component {
    render() {
        return <h1>Hello React!</h1>
    }
}


//declarative 
ReactDOM.render(<Heading></Heading>, document.getElementById('root'))