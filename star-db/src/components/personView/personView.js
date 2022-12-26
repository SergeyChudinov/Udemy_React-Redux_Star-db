import React from 'react';

import ErrorButton from "../error-button/error-button";

const PersonView = ({person, image}) => {
    const {name, gender, birthYear, eyeColor} = person;
  
    return (
      <>
        <img className="person-image"
          src={image}  alt="img"/>
        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>{gender}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>{eyeColor}</span>
            </li>
          </ul>
          <ErrorButton />
        </div>
      </>
    )
}
export default PersonView;