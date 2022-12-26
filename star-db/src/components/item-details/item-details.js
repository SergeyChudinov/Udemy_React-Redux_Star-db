import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import Skeleton from '../skeleton/Skeleton'
import PersonView from '../personView';
import PlanetView from '../planetView';
import StarshipView from '../starshipView';

import './item-details.css';

// import img from './1.png';

export default class ItemDetails extends Component {
  swapiService = new SwapiService()
  state = {
    item: null,
    loading: false,
    error: false,
    image: null
  };

  componentDidMount() {
    this.updateItem()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem()
    }
  }

  onCharLoading = () => {
    this.setState({
      loading: true,
    });
  }

  onCharLoaded = (item, getImageUrl) => {
    this.setState({
      item,
      loading: false,
      image: getImageUrl(item)
    });
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  }

  updateItem = () => {
    const {itemId, getItem, getImageUrl} = this.props
    if (!itemId) {
      return
    }
    this.onCharLoading();
    getItem(itemId)
      .then(item => this.onCharLoaded(item, getImageUrl))
      .catch(this.onError);
  }

  render() {
    const {item, loading, error, image} = this.state;
    // console.log(person)

    const skeleton = item || loading || error ? null : <Skeleton/>;
    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;

    if (skeleton) {
      return skeleton
    } 

    let element = null;
    if (item) {
      const personView = item.gender ? <PersonView person={item} image={image}/> : null;
      const planetView = item.population ? <PlanetView planet={item} image={image}/> : null;
      const starshipView = item.model ? <StarshipView starship={item} image={image}/> : null;

      element = personView || planetView || starshipView;
    }

    const content = !(loading || error) ? element : null;

    return (
      <div className="person-details card">
        {errorMessage || spinner || content}
      </div>
    )
  }
}