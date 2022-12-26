import React, { Component } from 'react';

import ItemList from '../item-list';
import ItemDetails from '../item-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';

import './item-page.css';

export default class ItemPage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {

    const itemList = (    
      <ErrorBoundry>
        <ItemList onItemSelected={this.onItemSelected}
          getData={this.props.getData}
          renderItem={this.props.children} />
      </ErrorBoundry>
    )

    const itemDetails = (
      <ErrorBoundry>
        <ItemDetails itemId={this.state.selectedItem}
          getItem={this.props.getItem}
          getImageUrl={this.props.getImageUrl} />
      </ErrorBoundry>
    )

    return (
      <Row left={itemList} right={itemDetails}/>
    );
  }
}
