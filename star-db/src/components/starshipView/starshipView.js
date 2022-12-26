import React from 'react';

import ErrorButton from "../error-button/error-button";

const StarshipView = ({starship, image}) => {
  const {name, model, manufacturer, costInCredits, length, crew, passengers, cargoCapacity} = starship;

  return (
    <>
      <img className="person-image"
        src={image}  alt="img"/>
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Model</span>
            <span>{model}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Manufacturer</span>
            <span>{manufacturer}</span>
          </li>
          <li className="list-group-item">
            <span className="term">CostInCredits</span>
            <span>{costInCredits}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Length</span>
            <span>{length}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Crew</span>
            <span>{crew}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Passengers</span>
            <span>{passengers}</span>
          </li>
          <li className="list-group-item">
            <span className="term">CargoCapacity</span>
            <span>{cargoCapacity}</span>
          </li>
        </ul>
        <ErrorButton />
      </div>
    </>
  )
}
export default StarshipView;