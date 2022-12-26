import React from 'react';

import ErrorButton from "../error-button/error-button";

const PlanetView = ({planet, image}) => {
  const {name, population, rotationPeriod, diameter} = planet;

  return (
    <>
      <img className="person-image"
        src={image}  alt="img"/>
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
export default PlanetView;