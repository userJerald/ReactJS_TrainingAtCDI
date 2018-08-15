// sa src folder/ create ng file named as headingcomponent.js

import React, { Component } from 'react'; // library

function Heading(props){
	return (
		<h1>This Heading</h1>
	)
}

export default Heading;


// sa app.js

import Heading from './headingcomponent';

// sa inner htmt ng app.js


<Heading/> // to use what you imported into here...





import {SubHeading} from './subheading'  // nagcreate ng bagng file


class Heading extends Component{
	state = {
		toggle: true,

		query : "Hello World"
	}

	changeQuery = () =>{
		this.setState({query: 'Hello Universe'});
	}

	render(){
		const {toggle} = this.state  // var pangpaikle

		return(
				<div>
					{toggle &&(
							//<h1>Hello world!</h1>

							<h1>this.state.query</h1>
						)
					}

					<button
						onClick={
							() = {
								this.setState((oldState) =>({
									toggle: !oldState; // pang update lng pla ng design parang serving as timer
							})
							}
						}
						>

					</button>

					<input type = "text"
						onChange = {
							(e) =>{
								this.setState({query:e.target.value})
							}
						}
					/>

				</div>
					// props is used as what other attribute is used
				</div>
			)
	}
}



// lecture


/*

REACT TECHNOLOGY LECTURE SERIES

REACT - JAVASCRIPT LIBR. OPEN SOURCE, COMPONENT BASED

JSX- JAVASCIPT AND HTML

COMPONENT - TO BRAK DOWN COMP UI

application > component > element - smallest


*/
