import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
import ItemPage from '../item-page';

import ErrorButton from '../error-button';

import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  render() {

    return (
      <>
        <ItemPage getData={this.swapiService.getAllPeople}
          getItem={this.swapiService.getPerson}/>

        {/* <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllPlanets} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}
              getData={this.swapiService.getAllStarships} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div> */}

      </>
    );
  }
}
