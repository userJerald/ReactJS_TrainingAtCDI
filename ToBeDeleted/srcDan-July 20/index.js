import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const element = (
    <BrowserRouter>
        <Root/>
    </BrowserRouter>
)

ReactDOM.render(
    element, 
    document.getElementById('root'));
registerServiceWorker();
