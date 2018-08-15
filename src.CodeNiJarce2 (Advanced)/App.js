import React, { Component } from 'react';
import './App.css';
import StudentList from './StudentList';
import Head from './Head';

class App extends Component {
  
  renderListStudent(){
  }
  

  render(){
    const students = [
      {firstName: 'Christian', lastName: 'Jarce', age: 21},
      {firstName: 'Jonathan', lastName: 'Pondavilla', age: 20},
      {firstName: 'Jomar', lastName: 'Ongcal', age: 19},
      {firstName: 'Jann Rhui', lastName: 'Cubio', age: 20},
      {firstName: 'Empoy', lastName: 'Diaz', age: 25},
      {firstName: 'Carl', lastName: 'Smith', age: 27},

    ];
    
    return(
      <div className="App">
        <Head/>
        <h1>This is header</h1>
        <input type="text" />
        <StudentList students={students}/>
      </div>
    );
  }

}

export default App;
