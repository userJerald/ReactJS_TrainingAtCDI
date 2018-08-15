import React from 'react';
import ReactDOM from 'react-dom';
// import { Collapse, Button, CardBody, Card } from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './learningAnimation.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'barItem': 0,
      'adder': 1
    };

    this.click = this.click.bind(this);
    this.timer = this.timer.bind(this);
  }

  click() {
    // console.log(this.state.adder);
    this.setState({
      'adder': this.state.adder * -1
    });
  }

  componentDidMount() {
    this.threadId = setInterval(this.timer, 100);
  }

  timer() {
    this.setState((prevState) => {
      console.log(prevState.barItem);
      if (prevState.barItem === 74 || prevState.barItem === 0) {
        return ({
          'adder': prevState.adder * -1,
          'barItem': prevState.barItem === 0 ? 1: 73
        })
      }

      return ({
        'barItem': prevState.barItem + prevState.adder
      })
    });
  }

  render() {
    const barItems = [];

    for (let i = 0; i <= this.state.barItem; i++) {
      barItems.push(<div key = {i} className = 'barItem'></div>);
    }

    return (
      <div className = 'container' style = {{backgroundColor: 'yellow'}}>
        <h1 className = 'content1'>yaeh</h1>
        <div className = 'content2-bar'>
          {barItems}
        </div>
        <div className = 'content3'></div>
        <div className = 'content4'></div>
        <div className = 'content5'></div>
        <div className = 'content6'></div>
        <div className = 'content7'></div>
        <div className = 'content8'></div>
        <div className = 'content9'></div>
        <div className = 'content10'></div>
        <div className = 'content11'></div>
        <div className = 'content12'></div>
        <div className = 'content13'></div>
        <div className = 'content14'></div>
        <div className = 'content15'></div>
        <button onClick = {this.click}>Push</button>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// class App extends React.Component {
//   constructor(props) {
//     super(props);
    
//     this.toggle = this.toggle.bind(this);
//     this.state = { collapse: false };
//   }

//   toggle() {
//     this.setState({ collapse: !this.state.collapse });
//   }

//   render() {
//     return (
//       <div>
//         <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
//         <Collapse isOpen={this.state.collapse}>
//           <Card style = {{width: '300px', backgroundColor: 'black', color: 'white'}}>
//             <CardBody>
//             Anim pariatur cliche reprehenderit,
//               enim eiusmod high life accusamus terry richardson ad squid. Nihil
//               anim keffiyeh helvetica, craft beer labore wes anderson cred
//               nesciunt sapiente ea proident.
//             </CardBody>
//           </Card>
//         </Collapse>
//         <div style = {{border: '1px solid black', backgroundColor: 'black', width: 'auto', height: 'auto'}}>
//             <h1 style = {{color: 'white'}}>baot</h1>
//         </div>
//       </div>
//     );
//   }
// }