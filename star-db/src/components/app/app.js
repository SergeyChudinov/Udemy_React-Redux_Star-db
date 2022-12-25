import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

import {PeoplePage, PlanetsPage, StarshipsPage} from '../page';
import SwapiService from '../../services/swapi-services';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';
// import PeoplePage from '../item-page';

import ErrorButton from '../error-button';

import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';

import './app.css';

export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      }
    });
  };

  componentDidCatch() {
    console.log('componentDidCatch');
    this.setState({hasError: true})
  }

  render() {

    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;

    return (
      <Router>
        <div className="stardb-app">
            <Header/>
            { planet }

            <div className="row mb2 button-row">
              <button
                className="toggle-planet btn btn-warning btn-lg"
                onClick={this.toggleRandomPlanet}>
                Toggle Random Planet
              </button>
              <ErrorButton />
            </div>

            <main>
              <Routes>
                <Route path="/" element={<PeoplePage />}/>              
                <Route path="/planets" element={<PlanetsPage />}/>
                <Route path="/starships" element={<StarshipsPage />}/>
              </Routes>
            </main>
        </div>
    </Router>
    );
  }
}



        {/* <PeoplePage />

        <div className="row mb2">
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


{/* <main>
  <Routes>
    <Route path="/" element={<PeoplePage
      getData={this.swapiService.getAllPeople}/>}/>              
    <Route path="/planets" element={<PlanetsPage
      getData={this.swapiService.getAllPlanets}/>}/>
    <Route path="/starships" element={<StarshipsPage
      getData={this.swapiService.getAllStarships}/>}/>
  </Routes>
</main> */}