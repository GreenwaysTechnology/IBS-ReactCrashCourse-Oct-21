//State pattern and immutablity
import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

class Movies extends React.Component {
    //initialState
    state = {
        movies: [{ id: Date.now(), name: 'Matrix' }],
        movieName: ''
    };
    //event listener
    handleSubmit = e => {
        //to stop auto form submission
        e.preventDefault();
        //form validation
        if (this.state.movieName.length === 0) {
            return;
        }
        const newMovie = {
            name: this.state.movieName,
            id: Date.now()
        };
        //update the items array
        this.setState(state => {
            return {
                movies:[...state.movies,newMovie],  //state.movies.concat(newMovie),
                movieName: ''
            }
        })
    }
    
    onHandleChange = e => {
        //Getting Text Box reference
        let inputBox = e.target;
        this.setState({ movieName: inputBox.value })
    }
    render() {
        return <>
            <h2>Movie Details</h2>
            <hr />
            <ul>
                {this.state.movies.map((movie, index) => {
                    return <li key={index}>{movie.name}</li>
                })}
            </ul>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="new-todo">Add Your Movie?</label>
                <br />
                <input onChange={this.onHandleChange} value={this.state.movieName} />
                <button className="btn btn-success">Add Movie #{this.state.movies.length + 1}</button>
            </form>
        </>
    }
}

const App = props => {
    return <div class="container">
        <h1>State Pattern-User Input-Array Immutablity</h1>
        <Movies />
    </div>
}
ReactDOM.render(<App />, document.getElementById('root'));