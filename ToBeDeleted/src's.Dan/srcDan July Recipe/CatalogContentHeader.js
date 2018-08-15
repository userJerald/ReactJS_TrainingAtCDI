import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';

class CatalogContentHeader extends Component {
    render() {
        const { detail } = this.props
        return (
            <div>
                <Jumbotron>
                    <Container>
                        <h1 className="display-3">{detail.title}</h1>
                        <p className="lead">{detail.description}</p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default CatalogContentHeader;