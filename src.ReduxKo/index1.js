import React from 'react';
import ReactDOM from 'react-dom';
import * as API from './API';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'results': []
        }
    }

    componentDidMount() {
        API.fetchItems('fries')
        .then((items) => {
            this.setState({
                'results': items
            });
        });
    }

    render() {
        const results = this.state.results.map((result) => <li key = {result.label}>{result.label}</li>);
        return (
            <ul>
                {results}
            </ul>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);