import React, { Component } from 'react';
import { Card as Crd, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { addToCart, removeFromCart } from './actions';
import { connect } from 'react-redux'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state={
            'datePicked': ''
        };
        this.handleChange= this.handleChange.bind(this);
    }
    
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        const { content, date, showDelete, ingredients } = this.props;
        const { datePicked } = this.state;
        if(ingredients){
        var itemIngredients = ingredients.map((ingredient,index) => <li key={index}>{ingredient.text}</li>);
        }
        return (
            <Crd>
                <CardImg top src={content.image} alt={content.label} />
                <CardBody>
                    <CardTitle>{content.label}</CardTitle>
                    <CardSubtitle>{content.source}</CardSubtitle>
                    <CardText>
                        <a href={content.shareAs}> Go to Link </a>
                    </CardText>
                    {!showDelete && <div>
                        <input type='date' name="datePicked" value={datePicked}
                            onChange={this.handleChange}/>
                        <Button onClick={() => {this.props.add({item:content},{date:datePicked})} }>Add to cart</Button>
                    </div>}
                    {showDelete && !ingredients && <Button color="danger" onClick={() => {this.props.remove({item:content})}}>Remove</Button>
                    }
                    <CardText>
                    {date}
                    </CardText>
                        <ul>
                        {itemIngredients}
                        </ul>
                </CardBody>
            </Crd>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        add: (item, date) => dispatch(addToCart(item, date)),
        remove: (data) => dispatch(removeFromCart(data))
    }
}

export default connect(null,mapDispatchToProps)(Card);