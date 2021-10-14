//State pattern and immutablity
import React from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Movies from './features/movies/movies'
import Album from "./features/alumbs/alumb";

const Home = props => <div>
    <h1>IBS Prime Time</h1>
</div>

const Page = props => <>
    <BrowserRouter>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/alumbs">Albums</Link></li>
            </ul>
        </nav>
        <hr />
        <Switch>
            <Route path="/movies">
                <Movies />
            </Route>
            <Route path="/alumbs">
                <Album />
            </Route>
            <Route>
                <Home />
            </Route>
        </Switch>
    </BrowserRouter>
</>

const App = props => {
    return <div className="container">
        <h1 style={{ textAlign: 'center' }}>Routing App</h1>
        <Page />
    </div>
}
ReactDOM.render(<App />, document.getElementById('root'));