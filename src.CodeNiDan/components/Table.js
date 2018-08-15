import React from 'react';

import Row from './Row';

class Table extends React.Component {
    render() {
        const rows = this.props.items.map((item) => 
            <Row key={item.id} item={item} removeRow={this.props.removeRow} fillForm={this.props.fillForm}/>
        );
        return (
            <table>
                <thead>
                    <tr>
                        <th>Code</th>
                        <th>Name</th>

                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        );
    }
}

export default Table