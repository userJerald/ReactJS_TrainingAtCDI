import React, { Component } from 'react';
import { Card as Crd, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { addToCart, removeFromCart } from './actions';
import { connect } from 'react-redux'

class Card extends Component {
    render() {
        const { content, showDelete } = this.props
        return (
            <Crd>
                <CardImg top src={content.image} alt={content.label} />
                <CardBody>
                    <CardTitle>{content.label}</CardTitle>
                    <CardSubtitle>{content.source}</CardSubtitle>
                    <CardText>
                        <a href={content.shareAs}> Go to Link </a>
                    </CardText>
                    {!showDelete && <Button onClick={() => {this.props.add({item:content})}}>Add to cart</Button>}
                    {showDelete && <Button color="danger" onClick={() => {this.props.remove({item:content})}}>Remove</Button>}
                </CardBody>
            </Crd>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        add: (data) => dispatch(addToCart(data)),
        remove: (data) => dispatch(removeFromCart(data))
    }
}

export default connect(null,mapDispatchToProps)(Card);