import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';
import ItemPage from '../item-page';

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  render() {
    const {getAllPeople, getPerson, getPersonImage} = this.swapiService;
    return (
      <>
        <ItemPage getData={getAllPeople}
          getItem={getPerson}
          getImageUrl={getPersonImage} >
            {(i) => (
              `${i.name} (${i.gender}, ${i.birthYear})`
            )}
        </ItemPage>
      </>
    );
  }
}
