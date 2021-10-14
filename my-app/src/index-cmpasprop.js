import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import logo from './IBS_Software.svg';

const Carousel = props => <div>
    {props.children}
</div>

const Text = props => {
    const style = {
        textAlign: 'center'
    }
    return <h1 style={style}>
        Redefining travel technology
    </h1>
}
const Image = props => {

    return <img src={logo} />
}


const App = props => {
    return <div className="container">
        <Carousel>
            {/* Here we pass component or html element can be passed as prop */}
            <Image />
            <hr/>
            <Text />

        </Carousel>
    </div>
}

ReactDOM.render(<App />, document.getElementById('root'));