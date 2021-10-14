//State pattern and immutablity
import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

class Counter extends React.Component {
    //initialState
    state = {
        value: 10
    };
    //event listener
    onIncrement = () => {
        // alert('button is ok')
        //i need to change the state(object), we need pure function.
        //react offeres built in pure function to change the state.

        //call setState method: which is pure function
        //setState(updater)
        //updater is callback function
        //updater(state,props)=>newState(immutable object)
        // this.setState(function (prevState, props) {
        //     return {
        //         value: prevState.value + 1
        //     }
        // }, function () {
        //     console.log('state has been updated')
        // })
        // this.setState((prevState, props) => {
        //     console.log(props)
        //     return {
        //         value: prevState.value + 1 + props.seed
        //     }
        // }, () => console.log('state has been updated'))

        // this.setState((prevState, props) => {
        //     console.log(props)
        //     return Object.assign({}, prevState, { value: prevState.value + 1 })
        // }, () => console.log('state has been updated'))

        this.setState((prevState, props) => {
            //console.log(props)
            console.log("OLD STATE ", prevState)
            return {
                ...prevState, value: prevState.value + 1
            }
        }, () => console.log('state has been updated'))
    }
    render() {
        console.log("NEW STATE ", this.state);
        return <>
            <h2>Value {this.state.value}</h2>
            <button onClick={this.onIncrement} className="btn btn-success">increment</button>
        </>
    }
}

const App = props => {
    return <div className="container">
        <h1>State Pattern</h1>
        <Counter seed={100} />
    </div>
}
ReactDOM.render(<App />, document.getElementById('root'));