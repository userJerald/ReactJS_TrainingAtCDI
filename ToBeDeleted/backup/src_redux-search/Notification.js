import React, { Component } from 'react';
import {Alert} from 'reactstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Notification extends Component {
    render() {
        console.log("hi");
        const {item} = this.props;
        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <Alert color='success' >
                        {item} has been successfully moved.
                    </Alert>
                </ReactCSSTransitionGroup>
            </div>
        );
    }
}

export default Notification;