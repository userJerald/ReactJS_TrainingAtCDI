import React from 'react';
import ReactDOM from 'react-dom';

const products = [
        {
            id: '_apple',
            name: 'Apple',
            price: 98,
            edit: false
        },
        {
            id: '_banana',
            name: 'Banana',
            price: 98,
            edit: false
        },
        {
            id: '_orange',
            name: 'Orange',
            price: 98,
            edit: false
        }
    ];

class Table extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products : this.props.products,
            draft: {id: 0, name: '', price: null, edit: false},
            warning: ''
        }
    }

    funct = {
        search : (e) =>{
            console.log(e.target.value)
        },

        flashWarning : (warning)=>{
            this.setState({
                warning: warning
            })
            setTimeout(()=>{
                this.setState({
                    warning: ''
                })  
            }, 1000)
        },
        addRow : (newProduct, event) => {
            if(newProduct !== ''){
                let products = this.state.products
                let filtered = products.filter(product => product.name.toLowerCase() === newProduct.toLowerCase())
                
                if(filtered.length > 0){
                    this.funct.flashWarning(newProduct + ' is already exist');
                } else {
                    products.push({
                        id: '_'+newProduct.toLowerCase(),
                        name: newProduct,
                        price: Math.floor(Math.random()*50) + 50
                    })
                    this.setState({
                        products : products
                    })
                } 
            } else {
                alert('walang value')
            }
            event.preventDefault();
        },
        typedraft : (id, field, e) => {
            if(field === 'name'){
                this.setState({
                    draft: {
                        id: id,
                        name: e.target.value,
                        price: this.state.draft.price,
                        picked: false,
                    }
                })
            }
            else if(field === 'price'){
                this.setState({
                    draft: {
                        id: id,
                        name: this.state.draft.name,
                        price: e.target.value,
                        picked: false,
                    }
                })
            }
        },
        toggleEditRow : (id, boolean) => {
            let products = this.state.products
            let draft;
            if(boolean){
                products = this.state.products.map(row => {
                    if(row.id === id){ 
                        draft ={id: row.id, name: row.name, price: row.price, edit: boolean} 
                        return {id: row.id, name: row.name, price: row.price, edit: boolean} 
                    } else{
                        return {id: row.id, name: row.name, price: row.price, edit: !boolean} 
                    }
                })
                this.setState({
                    products: products,
                    draft: draft
                })
            } else{
                products = this.state.products.map(row => {
                    if(row.id === id){ 
                        return {id: row.id, name: row.name, price: row.price, edit: boolean} 
                    } else{
                        return row 
                    }
                })
                this.setState({
                    products: products,
                    draft: {id: 0, name: '', price: null, edit: false},
                })
            }
                // console.log(products)
        },
        removeRow : (id)=>{
            let products = this.state.products.filter((row)=> row.id !== id)
            
            this.setState({
                products : products,
            })
        },
        saveEditRow: (id) => {
            const {draft} = this.state
            if(draft.name === '' || draft.price === ''){
                this.funct.flashWarning('dont leave blank field');
            } else{

                let products = this.state.products.map(row =>{
                    if(row.id === id){
                        return this.state.draft
                    } else {
                        return row
                    }
                })
                this.setState({
                    products: products
                })
            }

        }

    }

    render(){
        const rows = [];
        this.state.products.forEach((x)=>{
            rows.push( <Row key={x.id} product={x} funct={this.funct} draft={this.state.draft}/>)
        })
        return(
            <div>
                <Search funct={this.funct}/>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
                <h5>{this.state.warning}</h5>
                <AddProduct addProduct={this.funct.addRow}/>
            </div>
        )
    }
}
class AddProduct extends React.Component{
    constructor(props){
        super()
        this.state = {
            productToAdd : '',
        }
    }
    type = (e)=>{
        this.setState({
            productToAdd: e.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.props.addProduct.bind(this, this.state.productToAdd)}>
                    <input type="text" placeholder='insert new product' value={this.state.productToAdd} onChange={ this.type.bind(this) }/>
                    <input type="submit" value="add"/>
                    {/* <button onClick={this.props.addProduct.bind(this, this.state.productToAdd)}>Add</button> */}
                </form>
            </div>
        )
    }
}

class Row extends React.Component{

    render(){
        const {product:{ id, name, price, edit}, funct, draft} = this.props

        return(
            <React.Fragment>
            {         
                edit ?  
                (<tr>
                    <td>{id}</td>
                    <td><input type="text" onChange={funct.typedraft.bind(this, id, 'name')} placeholder={name} value={draft.name}/></td>
                    <td><input type="number" onChange={funct.typedraft.bind(this, id, 'price')} placeholder={price} value={draft.price}/></td>
                    <td>
                        <button onClick={funct.saveEditRow.bind(this, id) }>Save</button>
                        <button onClick={funct.toggleEditRow.bind(this, id, false)}>Cancel</button>
                    </td>
                </tr>):
               (<tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>
                        <button onClick={funct.removeRow.bind(this, id) }>Delete</button>
                        <button onClick={funct.toggleEditRow.bind(this, id, true) }>Edit</button>
                    </td>
                </tr>)
            }
            </React.Fragment>
        )
    }
}
class Search extends React.Component{
    render(){
        return(
            <React.Fragment>
                <input type="text" onChange={this.props.funct.search.bind(this)}/>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <Table products={products}/>, 
    document.getElementById('root'));