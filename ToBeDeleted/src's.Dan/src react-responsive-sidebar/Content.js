import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { Jumbotron, Table, Input, Button, InputGroup, InputGroupAddon } from 'reactstrap'

const products=[{'id':1, 'name': 'Apple', 'category': 'Fruit'},
                {'id':2, 'name': 'Nova', 'category': 'Junkfood'},
                {'id':3, 'name': 'Bread', 'category': 'Pastry'}
];

const searchItems = (query,items) =>{
    return items.filter((item) =>
        item.name.toLowerCase().indexOf(query.toLowerCase()) > -1
    );
}

const Home = () => (
    <Jumbotron>
        <h2>Home</h2>
        <p>I'm the homepage</p>
    </Jumbotron>
)

const AboutUs = () => (
    <Jumbotron>
        <h2>About Us</h2>
        <p>I'm the about us page</p>
    </Jumbotron>
)

const ContactUs = ({match}) => (
    <Jumbotron>
        <h2>Contact Us</h2>
        <p>I'm the contact page</p>
        <Link to={`${match.url}/help`}> Help </Link>
    </Jumbotron>
)

// const Detail = ({ match }) => <h2>{match.params.word}</h2>

class Detail extends Component {
    render() {
        const {  match : { params : { word } } } = this.props
        return (
            <h1>{word}</h1>
        );
    }
}

class TablePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'items': products,
            'filteredItems': products
        };
        this.search= this.search.bind(this);
    }

    search(query){
        const filterItems = searchItems(query,this.state.items);
        this.setState({
            'filteredItems': filterItems
        });
    }
    
    render() {
        const rows= this.state.filteredItems.map((item) =>
            <Row key={item.id} item={item}/>);
        return (
            <Jumbotron>
                <h5>This is table page</h5>
                <Search onClick={this.search}/>
                <hr/>
                <Table dark size="sm" style={{width:30+'%'}}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Product</th>
                            <th>Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </Jumbotron>
        );
    }
}

class Row extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.item.id}</td>
                <td>{this.props.item.name}</td>
                <td>{this.props.item.category}</td>
            </tr>
        );
    }
}

class Search extends Component {
    constructor(props) {
        super(props);
        this.state= {
            'text':''
        };
        this.handleChange= this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    render() {
        return (
            <div style={{
                width: '30%',

            }}>
                <InputGroup>
                <Input type='text' name='text' value={this.state.text} 
                    onChange={this.handleChange} placeholder="Search product name here"/>
                <InputGroupAddon addonType="append"><Button color="info" 
                    onClick={this.props.onClick.bind(this,this.state.text)}>Search</Button>
                </InputGroupAddon>
                </InputGroup>
            </div>
        );
    }
}


const NoMatch = () => (
    <Redirect to="/home"/>
);

class Content extends Component {
    render() {
        console.log('Content component');
        return (
            <div>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/aboutus" component={AboutUs}/>
                    <Route path="/contactus" component={ContactUs}/>
                    <Route path="/table" component={TablePage}/>
                    <Route component={NoMatch}/>
                </Switch>
                    <Route path="/contactus/:word" component={Detail}/>
            </div>
        );
    }
}

export default Content;