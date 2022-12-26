import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';
import ItemPage from '../item-page';

export default class StarshipsPage extends Component {
  swapiService = new SwapiService();

  render() {
    const {getAllStarships, getStarship, getStarshipImage} = this.swapiService;
    return (
      <>
        <ItemPage getData={getAllStarships}
          getItem={getStarship}
          getImageUrl={getStarshipImage} >
            {(i) => (
              `${i.name} (${i.model}, ${i.passengers})`
            )}
        </ItemPage>
      </>
    );
  }
}
