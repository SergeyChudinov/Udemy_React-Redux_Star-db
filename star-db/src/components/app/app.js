import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

import {PeoplePage, PlanetsPage, StarshipsPage} from '../page';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from '../error-indicator';

import ErrorButton from '../error-button';

import './app.css';

export default class App extends Component {
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