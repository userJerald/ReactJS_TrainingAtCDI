import React, { Component } from 'react';
import SubHead from './SubHead';
import Users from './User'

class Head extends Component {
    state={
        toggle: true,
        txt: 'Main Head'
    }

    fun = {
        clickToggle: () =>{
            this.setState({
                toggle: !this.state.toggle
            })},
        typeValue: (e) =>{
            this.setState({
                txt: e.target.value
            })}
    }
    render(){

        return(
            <div>
                {
                    this.state.toggle &&
                    <h1>{this.state.txt}</h1>
                }
                <SubHead func={this.fun} v={this.state.txt}/>
                <Users />
            </div>
        )
    }
}

export default Head;