//State pattern and immutablity
import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'

class Rating extends React.Component {
    //initialState
    state = {
        movie: {
            name: 'Matrix',
            points: 0
        },
        actor: {
            name: 'Keanu Reeves'
        }
    };
    //event listener
    onLike = () => {
        this.setState((state) => {
            return {
                ...state,
                movie: {
                    ...state.movie,
                    points: state.movie.points + 1
                }
            }
        });
    }
    render() {
        return <>
            <h2>Movie Details</h2>
            <hr />
            <h2>Name {this.state.movie.name}</h2>
            <h2>Actor Name : {this.state.actor.name}</h2>
            <h3>Rating Points {this.state.movie.points}</h3>
            <button style={{ margin: '10px' }} onClick={this.onLike} className="btn btn-success">Like</button>

            <button onClick={() => {
                this.setState((state) => {
                    return {
                        ...state,
                        movie: {
                            ...state.movie,
                            points: state.movie.points - 1
                        }
                    }
                });
            }} className="btn btn-success">Dislike</button>
        </>
    }
}

const App = props => {
    return <div class="container">
        <h1>State Pattern</h1>
        <Rating />
    </div>
}
ReactDOM.render(<App />, document.getElementById('root'));