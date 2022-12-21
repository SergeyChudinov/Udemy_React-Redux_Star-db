import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './item-list.css';

export default class ItemList extends Component {
  swapiService = new SwapiService()
  state = {
    peopleList: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    this.updateItemList();
  }

  onItemListLoaded = (peopleList) => {
    this.setState({
      peopleList,
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
    this.swapiService
      .getAllPeople()
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
    const {peopleList, loading, error} = this.state;

    if (!peopleList) {
      return <Spinner/>
    }

    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;
    // const content = !loading ? this.renderItems(peopleList) : null;

    const items = this.renderItems(peopleList);

    return (
      <ul className="item-list list-group">
        {errorMessage || spinner || items}
      </ul>
    );
  }
}
