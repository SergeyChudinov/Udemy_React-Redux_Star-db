import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';
import ItemPage from '../item-page';

export default class StarshipsPage extends Component {
  swapiService = new SwapiService();
  state = {
    func: null
  };

  render() {

    return (
      <>
        <ItemPage getData={this.swapiService.getAllStarships}
            getItem={this.swapiService.getStarship}/>
      </>
    );
  }
}
