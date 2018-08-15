import React from 'react';

import Table from '../components/Table';
import Form from '../components/Form';

import * as CountryAPI from '../services/CountryAPI';

class CountryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'items': [],
            'item': {
                'id': null,
                'code': '',
                'name': ''
            }
        }
        this.addRow = this.addRow.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.updateRow = this.updateRow.bind(this);
        this.fillForm = this.fillForm.bind(this);
    }

    componentDidMount() {
        CountryAPI.getCountries()
        .then((response) => {
            this.setState({
                'items': response.countries
            });
        });
    }

    addRow(item) {
        CountryAPI.createCountry(item)
        .then((response) => {
            const items = this.state.items;
            items.push(response.country);
            this.setState({
                'items': items
            });
        });
    }

    updateRow(item) {
        CountryAPI.editCountry(item.id, item)
        .then((response) => {
            const items = this.state.items.filter((country) => country.id!==item.id);
            items.push(response.country);
            this.setState({
                'items': items,
                'item': {
                    'id': null,
                    'code': '',
                    'name': ''
                }
            });
        });
    }

    removeRow(item) {
        CountryAPI.deleteCountry(item.id)
        .then((response) => {
            const items = this.state.items.filter((country) => country.id!== item.id)
            this.setState({
                'items': items
            });
        });  
    }

    fillForm(item) {
        this.setState({
            'item': item
        });
    }

    render() {
        return (
            <div>
                <Table items={this.state.items} removeRow={this.removeRow} fillForm={this.fillForm}/>
                <Form addRow={this.addRow} item={this.state.item} updateRow={this.updateRow}/>
            </div>
        );
    }
}

export default CountryPage;