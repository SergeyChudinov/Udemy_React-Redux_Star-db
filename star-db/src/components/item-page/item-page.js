import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';
import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';

import './item-page.css';

export default class ItemPage extends Component {
  swapiService = new SwapiService();
  state = {
    selectedItem: null,
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList onItemSelected={this.onItemSelected}
            getData={this.props.getData} />
        </div>
        <div className="col-md-6">
          <PersonDetails itemId={this.state.selectedItem}
            getItem={this.props.getItem} />
        </div>
      </div>
    );
  }
}
