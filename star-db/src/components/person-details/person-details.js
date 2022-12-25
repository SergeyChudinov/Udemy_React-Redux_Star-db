import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import ErrorButton from "../error-button/error-button";
import Skeleton from '../skeleton/Skeleton'

import './person-details.css';

import img from './1.png';

export default class PersonDetails extends Component {
  swapiService = new SwapiService()
  state = {
    person: null,
    loading: false,
    error: false,
    hasError: false
  };

  componentDidMount() {
    this.updatePerson()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updatePerson()
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }

  onCharLoading = () => {
    this.setState({
      loading: true,
    });
  }

  onCharLoaded = (person) => {
    this.setState({
      person,
      loading: false,
    });
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  }

  updatePerson = () => {
    const {itemId, getItem} = this.props
    if (!itemId) {
      return
    }
    this.onCharLoading();
    getItem(itemId)
      .then(this.onCharLoaded)
      .catch(this.onError);
  }

  render() {
    const {person, loading, error} = this.state;
    // console.log(person)

    const skeleton = person || loading || error ? null : <Skeleton/>;
    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;

    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    if (skeleton) {
      return skeleton
    } 

    let item = null;
    if (person) {
      const personView = person.gender ? <PersonView person={person}/> : null;
      const planetView = person.population ? <PlanetView planet={person}/> : null;
      const starshipView = person.model ? <StarshipView starship={person}/> : null;

      item = personView || planetView || starshipView;
    }

    const content = !(loading || error) ? item : null;

    return (
      <div className="person-details card">
        {errorMessage || spinner || content}
      </div>
    )
  }
}

const PersonView = ({person}) => {
  const {id, name, gender, birthYear, eyeColor} = person;

  return (
    <>
      <img className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}  alt="img"/>

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </>
  )
}

const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;

  return (
    <>
      <img className="person-image"
        src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}  alt="img"/>

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population</span>
            <span>{population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period</span>
            <span>{rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter</span>
            <span>{diameter}</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </>
  )
}

const StarshipView = ({starship}) => {
  const {id, name, model, manufacturer, costInCredits, length, crew, passengers, cargoCapacity} = starship;

  return (
    <>
      <img className="person-image"
        src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}  alt="img"/>

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Model</span>
            <span>{model}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Manufacturer</span>
            <span>{manufacturer}</span>
          </li>
          <li className="list-group-item">
            <span className="term">CostInCredits</span>
            <span>{costInCredits}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Length</span>
            <span>{length}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Crew</span>
            <span>{crew}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Passengers</span>
            <span>{passengers}</span>
          </li>
          <li className="list-group-item">
            <span className="term">CargoCapacity</span>
            <span>{cargoCapacity}</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </>
  )
}