import React, { Component } from 'react';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './item-list.css';

export default class ItemList extends Component {
  state = {
    itemList: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updateItemList();
  }

  onItemListLoaded = (itemList) => {
    this.setState({
      itemList,
      loading: false
    });
  }

  onError = () => {
    this.setState({
        loading: false,
        error: true
    });
}

  updateItemList = () => {
    const { getData } = this.props;


    getData()
      .then(this.onItemListLoaded)
      .catch(this.onError);
}

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className="list-group-item" 
            key={id}
            onClick={() => this.props.onItemSelected(id)}>
          {name}
        </li>
      )    
    })
  }

  render() {
    const {itemList, loading, error} = this.state;

    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? this.renderItems(itemList) : null;

    return (
      <ul className="item-list list-group">
        {errorMessage || spinner || content}
      </ul>
    );
  }
}
