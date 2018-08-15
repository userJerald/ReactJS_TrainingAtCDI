import React from 'react';
import ReactDOM from 'react-dom';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
      }
    
      toggle() {
        this.setState({ collapse: !this.state.collapse });
      }
    
      render() {
        return (
          <div>
            <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Toggle</Button>
            <Collapse isOpen={this.state.collapse}>
              <Card style = {{width: '300px', backgroundColor: 'black', color: 'white'}}>
                <CardBody>
                Anim pariatur cliche reprehenderit,
                 enim eiusmod high life accusamus terry richardson ad squid. Nihil
                 anim keffiyeh helvetica, craft beer labore wes anderson cred
                 nesciunt sapiente ea proident.
                </CardBody>
              </Card>
            </Collapse>
            <div style = {{border: '1px solid black', backgroundColor: 'black', width: 'auto', height: 'auto'}}>
                <h1 style = {{color: 'white'}}>baot</h1>
            </div>
          </div>
        );
      }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);