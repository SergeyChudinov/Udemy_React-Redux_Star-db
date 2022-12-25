import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';
import ItemPage from '../item-page';

export default class PlanetsPage extends Component {
  swapiService = new SwapiService();
  state = {
    func: null
  };

  render() {

    return (
      <>
        <ItemPage getData={this.swapiService.getAllPlanets}
            getItem={this.swapiService.getPlanet}/>
      </>
    );
  }
}
