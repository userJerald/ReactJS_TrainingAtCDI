import React, { Component } from 'react';

class StudentList extends Component{
    render(){

        return(
            // {students} = props
            
        <div className="StudentList">
            <ul>
                {
                    this.props.students.map((x, index) => 
                    <li key={index}>name: { x.firstName +" "+ x.lastName} | age: {x.age}</li>)
                }
            </ul>
        </div>
    );
}
}

export default StudentList; 