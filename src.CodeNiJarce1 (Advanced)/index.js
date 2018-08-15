import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import World from './App';


const heroList = [
    {name: 'Junie Boy', picked: false},
    {name: 'Junie Bem', picked: false},
    {name: 'Junie Girl', picked: false},
    {name: 'Junie Jem', picked: false}
    ];

ReactDOM.render(<World heroList={heroList}/>, document.getElementById('root'));
