import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import ErrorButton from "../error-button/error-button";
import Skeleton from '../skeleton/Skeleton'

import './person-details.css';

export default class PersonDetails extends Component {
  swapiService = new SwapiService()
  state = {
    person: null,
    loading: false,
    error: false
  };

  componentDidMount() {
    this.updatePerson()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson()
    }
  }

  updatePerson = () => {
    const {personId} = this.props
    if (!personId) {
      return
    }
    this.onCharLoading();
    this.swapiService
      .getPerson(personId)
      .then(this.onCharLoaded)
      .catch(this.onError);

  }

  onCharLoaded = (person) => {
    this.setState({
      person,
      loading: false,
    });
  }

  onCharLoading = () => {
    this.setState({
      loading: true,
    });
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true
    });
  }


  render() {
    const {person, loading, error} = this.state;

    const skeleton = person || loading || error ? null : <Skeleton/>;
    const errorMessage = error ? <ErrorIndicator/> : null;
    const spinner = loading ? <Spinner/> : null;

    if (skeleton) {
      return skeleton
    } 

    return (
      <div className="person-details card">
        {skeleton || errorMessage || spinner || <PersonView person={person}/>}
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