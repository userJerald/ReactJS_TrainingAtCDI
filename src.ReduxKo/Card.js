import React from 'react';

import {connect} from 'react-redux';
import { addToCart, removeFromCart } from './actions'; // function add and remove are specified in buttons of Card Component

class Card extends React.Component {
    render() {
        const {fruit, AddorRemove} = this.props;

        return (
        <div>
            <p>id: {fruit.id}</p>
            <ul style = {{listStyleType: 'none'}}>
                <li>name: {fruit.name}</li>
                <li>price: P {fruit.price}.00</li>
                <li>{AddorRemove && <input type = 'button' value = 'Add' onClick = {() => this.props.add({item: fruit})} />}</li>
                <li>{!AddorRemove && <input type = 'button' value = 'Remove' onClick = {() => this.props.remove({item: fruit})} />}</li>
            </ul>
        </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        add: (data) => dispatch(addToCart(data)),
        remove: (data) => dispatch(removeFromCart(data))
    }
}

export default connect(null, mapDispatchToProps)(Card);