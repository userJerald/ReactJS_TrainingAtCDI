import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.submit = this.submit.bind(this);
    }

    handleChange(e) {
        this.setState({
            'item': {
                [e.target.name]: e.target.value
            }
        })
        this.props.item[e.target.name] = e.target.value;
    }

    submit(e) {
        e.preventDefault();
        if(this.props.item.id) {
            this.props.updateRow(this.props.item);
        } else {
            this.props.addRow(this.props.item);
        }
    }

    render() {
        return(
            <form onSubmit={this.submit}>
                <input type='text' name='code' value={this.props.item.code} 
                    onChange={this.handleChange} />
                <input type='text' name='name' value={this.props.item.name} 
                    onChange={this.handleChange} />
                <input type='submit' value={this.props.item.id ? 'SAVE' : 'ADD'} />
            </form>
        );
    }
}
 export default Form