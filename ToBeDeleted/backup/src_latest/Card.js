import React, { Component } from 'react';
import { Card as Crd, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Input } from 'reactstrap';
import { addToCart, removeFromCart } from './actions';
import { connect } from 'react-redux'
import { DropdownItem, DropdownToggle, DropdownMenu, ButtonDropdown } from 'reactstrap';
import moment from 'moment';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state={
            'datePicked': '',
            'dropdrownOpen': false
        };
        this.toggle= this.toggle.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }
    
    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        const { content, date, showDelete, ingredients } = this.props;
        const { datePicked } = this.state;
        // const newDate= date.moment().format('MMMM Do YYYY, h:mm:ss a');
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
                        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} 
                            style={{float:'right'}}>
                            <DropdownToggle caret color="primary">
                                Add to cart
                            </DropdownToggle>
                            <DropdownMenu>
                            <Input type='date' name="datePicked" value={datePicked}
                            onChange={this.handleChange}/>
                            <DropdownItem divider />
                            <div style={{float:'right'}}>
                                <Button disabled={!datePicked} color="success"
                                        onClick={() => {this.props.add({item:content},{date:datePicked})}}>Add to calendar</Button>
                            </div>
                            </DropdownMenu>
                        </ButtonDropdown>
                    </div>}
                    {showDelete && !ingredients && <Button color="danger" onClick={() => {this.props.remove({item:content})}}>Remove</Button>
                    }
                    <CardText>
                    {date && moment(date).format('MMMM DD YYYY')}
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