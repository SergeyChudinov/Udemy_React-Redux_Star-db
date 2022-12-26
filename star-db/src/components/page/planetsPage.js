import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';
import ItemPage from '../item-page';

export default class PlanetsPage extends Component {
  swapiService = new SwapiService();

  render() {
    const {getAllPlanets, getPlanet, getPlanetImage} = this.swapiService;
    return (
      <>
        <ItemPage getData={getAllPlanets}
          getItem={getPlanet}
          getImageUrl={getPlanetImage} >
            {(i) => (
              `${i.name} (${i.population}, ${i.diameter})`
            )}
        </ItemPage>
      </>
    );
  }
}
