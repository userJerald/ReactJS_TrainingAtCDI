import React from 'react';

import { connect } from 'react-redux'
import Card from './Card';

class Cart extends React.Component {
    render() {
        // let items = null

        // if (this.props.cart) {
        //     console.log('cart Component =', this.props.cart.items)
        // }
        const items = this.props.cart.items.map((fruit) => <Card key = {fruit.id} fruit = {fruit} AddorRemove = {false} />)

        return items;
    }
}

function mapStateToProps ({cart}) {
    console.log('cart =', cart);
    return {cart}
}

export default connect(mapStateToProps, null)(Cart);