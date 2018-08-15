import React from 'react';

class Row extends React.Component {
    render() {
        return(
            <tr>
                <td>{this.props.item.code}</td>
                <td>{this.props.item.name}</td>
                <td><button onClick={this.props.fillForm.bind(this, this.props.item)}>UPDATE</button></td>
                <td><button onClick={this.props.removeRow.bind(this, this.props.item)}>REMOVE</button></td>
            </tr>
        );
    }
}

export default Row;