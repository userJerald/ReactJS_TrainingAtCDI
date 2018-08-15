import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {AlertEx, ButtonEx} from './reactstrap';

class App extends React.Component {
    render() {
        return (
            <div className = 'container'>
                <ButtonEx />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);