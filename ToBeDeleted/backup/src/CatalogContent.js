import React, { Component } from 'react';
import CatalogContentHeader from './CatalogContentHeader';
import CatalogContentCards from './CatalogContentCards';

class CatalogContent extends Component {
    render() {
        return (
            <div>
                <CatalogContentHeader {...this.props} />
                <CatalogContentCards {...this.props} />
            </div>
        );
    }
    
}

export default CatalogContent;