import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';

import CatalogContent from './CatalogContent';

class Catalog extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: '0',
            components: [
                {
                    title:'Fries',
                    description: 'I display fries',
                    filter:'fries'
                },
                {
                    title:'Pizza',
                    description: 'I am the pizza shop',
                    filter:'pizza'
                },
                {
                    title:'Drinks',
                    description: 'I am the beverages... err drinks shop',
                    filter:'drinks'
                }
            ]
        }

        this.toggle = this.toggle.bind(this)
    }

    toggle (tabIndx) {
        this.setState({
            activeTab: tabIndx
        })
    }

    render() {
        const { activeTab, components } = this.state;
        return (
            <Col>
                <Nav tabs>
                    {components.map((component, idx) => 
                        <NavItem key={idx}>
                            <NavLink 
                                className={this.state.activeTab === idx ? 'active' : ''}
                                onClick={() => { this.toggle(idx); }}
                            >
                                {component.title}
                            </NavLink>
                        </NavItem>
                    )}
                </Nav>
                <Row>&nbsp;</Row>
                <TabContent activeTab={this.state.activeTab}>
                    {components.map((item,idx) => 
                        <TabPane key={idx} tabId={`${idx}`}>
                            <Row>
                                <Col sm="12">
                                    {activeTab === `${idx}` && <CatalogContent detail={item}/>}
                                </Col>
                            </Row>
                        </TabPane>
                    )}
                </TabContent>
            </Col>
        );
    }
}

export default Catalog;