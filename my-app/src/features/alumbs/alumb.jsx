import React from 'react'

class Album extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        items: []
    };
    componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/albums'
        fetch(url)
            .then(res => res.json())
            .then(result => {
                // this.setState(state => {
                //     return { ...state, isLoaded: true, items: result };
                // })
                this.setState({
                    isLoaded: true,
                    items: result
                })
            }, error => {
                this.setState({
                    isLoaded: true,
                    error
                })
            })

    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <h1>Error</h1>
        } else if (!isLoaded) {
            return <h1>Loading...</h1>
        } else {
            return <>
                <ul>
                    {items.map((item, index) => {
                        return <li key={index}>{item.id} {item.title}</li>
                    })}
                </ul>
            </>
        }
    }
}

export default Album;
