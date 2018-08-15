import React from 'react';
import ReactDOM from 'react-dom';

const products=[
    {
     'id':1,
     'name':'Apple',
     'category':'Fruit',
     'price':'10',
     'stock':100
    },
    {
     'id':2,
     'name':'TV',
     'category':'Appliance',
     'price':'15000',
     'stock':5
    },
    {
     'id':3,
     'name':'Nova',
     'category':'Snack',
     'price':'25',
     'stock':20
    },
];

// //const users =[
//     {
//         'id':1,
//         'username':'Dan',
//         'password':'pass'
//     }
// ];

class App extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            'isLoggedIn':false,
            'username':'Dan',
            'password':''
        })
        this.signIn=this.signIn.bind(this);
        this.signOut=this.signOut.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    
    componentDidMount(){
        this.textInput.focus();
    }
    
    signIn(e){
        e.preventDefault();
        this.setState({
            'isLoggedIn':true,
        })
    }
    
    signOut(e){
        e.preventDefault();
        this.setState({
            'isLoggedIn':false
        })
    }
    
    handleChange(e){
        this.setState({[e.target.name]: e.target.value})    
    }
    
    render(){
        const isLoggedIn=this.state.isLoggedIn; 
        return(
            <div>
                {isLoggedIn ? 
                    (<Home signOut={this.signOut} username={this.state.username}
                        item={this.props.items} focus={(input) => this.textInput = input}/>
                    ) : (
                    <SignIn onSubmit={this.signIn} onChange={this.handleChange}
                        user={this.state} focus={(input) => this.textInput = input}/>)
                }
            </div>
        )
    }
}

class SignIn extends React.Component{
    render(){
        return(
            <div>
                <form onSubmit={this.props.onSubmit} >
                    Username: <input type='text' name="username" value={this.props.user.username} 
                        onChange={this.props.onChange.bind(this)} ref={this.props.focus}/><br/>
                    Password: <input type='password' name="password" 
                        onChange={this.props.onChange}/><br/>
                    <input type='submit' value="Sign In"/>
                </form>
            </div>
        )
    }
}

class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>Welcome {this.props.username}</h1>
                <SignOut signOut={this.props.signOut}/>
                <select name="setting" value={this.props.username}>
                    <option value="Settings">Settings</option>
                    <option value="Log out">Log out</option>
                </select>
                <Table item= {this.props.item}/>
            </div>
        )
    }
}

class SignOut extends React.Component{
    render(){
        return(
            <button onClick={this.props.signOut.bind(this)}>Sign Out</button>
        )
    }
}

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state=({
            'item':this.props.item,
            'index':this.props.item.length,
            'id':'',
            'name':'',
            'category':'Fruit',
            'price':'',
            'stock':'',
            'sort':'id',
            'order':'Ascending',
            'noStocks':'false'
        })
        this.addRow= this.addRow.bind(this);
        this.removeRow= this.removeRow.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.sortRow= this.sortRow.bind(this);
    }
    
    componentDidMount(){
        let dataset = this.state.item.sort((a,b) => a.id - b.id );
        this.setState({'item':dataset});
        this.textInput.focus();
    }
    
    addRow(e){
        e.preventDefault();
        let dataset= this.state.item;
        dataset.push({
            'id': this.state.index +1,
            'name':this.state.name,
            'category':this.state.category,
            'price':this.state.price,
            'stock':this.state.stock
        })
        this.setState({
            'item': dataset,
            'index':this.state.index + 1,
            'name':'',
            'category':'Fruit',
            'price':'',
            'stock':''
        })
        this.textInput.focus();
    }
    
    removeRow(id, e){
        let dataset = this.state.item.filter((item) =>
                        item.id !== id);
        this.setState({
            'item':dataset
        })
    }
    
    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }
    
    sortRow(e){
        this.setState({[e.target.name]: e.target.value});
        var dataset = [];
        var sort = this.state.sort;
        var order = this.state.order;
        if(e.target.name==="sort"){
            sort = e.target.value
        }       
        if(e.target.name==="order"){
            order= e.target.value
        }
        if(sort==="name"){
            if(order==="Ascending"){
                dataset = this.state.item.sort((a,b) =>       
                    a.name.toLowerCase()>b.name.toLowerCase());
            }
            else{
                dataset = this.state.item.sort((a,b) =>  
                    a.name.toLowerCase()<b.name.toLowerCase());
            }
        }
        else{
            if(order==="Ascending"){
                dataset = this.state.item.sort((a,b) =>  
                    a.id - b.id);
            }
            else{
                dataset = this.state.item.sort((a,b) =>  
                    b.id - a.id);
            }
        }
        this.setState({'item':dataset})
    }
    
    render(){
        let rows= this.state.item.map((product) =>
                    <Row key={product.id} product={product} onClick={this.removeRow}
                        onChange={this.handleChange}/>);
        return(
            <div>
                <SortTable table={this.state} onChange={this.sortRow}/>
                <table>
                    <TableHead/>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                <Form onChange={this.handleChange} onSubmit={this.addRow} item={this.state}
                        focus={(input) => this.textInput = input}/>
            </div>
        )
    }
}

class TableHead extends React.Component{
    render(){
        return(
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>    
                </tr>
            </thead>
        )
    }
}

class SortTable extends React.Component{
    render(){
        return(
            <div>
                <hr/>
                    <input type='checkbox' name="noStock" value="true"/> Don't show no stocks<br/>
                    Sort by: 
                    <select name="sort" value={this.props.table.sort} 
                    onChange={this.props.onChange.bind(this)}>
                        <option value="id">ID</option>
                        <option value="name">Product</option>
                        <option value="category">Category</option>
                        <option value="price">Price</option>
                        <option value="stock">Stock</option>
                    </select>
                    <input type='radio' name="order" value="Ascending"
                        onClick={this.props.onChange.bind(this)}  defaultChecked />Ascending
                    <input type='radio' name="order" value="Descending" 
                        onClick={this.props.onChange.bind(this)}/>Descending
            </div>
        )
    }
}

class Row extends React.Component{
    render(){
        return(
            <tr>
                <td>{this.props.product.id}</td>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.category}</td>
                <td>{this.props.product.price}</td>
                <td>{this.props.product.stock}</td>
                <td><button onClick={this.props.onClick.bind(this,this.props.product.id)}>
                    X</button></td>
            </tr>
        )
    }
}

class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.onSubmit}>
                <input type='text' name="name" value={this.props.item.name}
                    onChange={this.props.onChange.bind(this)}
                    ref={this.props.focus.bind(this)}/>
                <select name="category" value={this.props.item.category}
                    onChange={this.props.onChange.bind(this)}>
                    <option value="Fruit">Fruit</option>
                    <option value="Snack">Snack</option>
                    <option value="Appliance">Appliance</option>
                </select>
                <input type='number' name="price" value={this.props.item.price}
                    onChange={this.props.onChange.bind(this)}/>
                <input type='number' name="stock2" value={this.props.item.stock}
                    onChange={this.props.onChange.bind(this)}/>
                <input type='submit' value="Add"/>
            </form>
        )
    }
}

ReactDOM.render(
    <App items={products}/>,
    document.getElementById('root')
);
