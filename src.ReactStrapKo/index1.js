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
        API.fetchItems()
        // .then((items) => {
        //     this.setState({
        //         'results': items
        //     });

        //     console.log(items);
        // });
    }

    render() {
        // return null;
        // const results = this.state.results.map((result) => <li key = {result.id}>{result.text}</li>);
        return (
            <ol>
                {/* {results} */}
            </ol>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);