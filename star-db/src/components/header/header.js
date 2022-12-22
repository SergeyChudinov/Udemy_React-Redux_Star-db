import React from 'react';
// import {Link, NavLink} from 'react-router-dom'; 

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">People</a>
        </li>
        <li>
          <a href="#">Planets</a>
        </li>
        <li>
          <a href="#">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;

{/* <ul>
  <li><NavLink style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit' })}
    end  to='/'>Characters</NavLink></li>
  /
  <li><NavLink style={({ isActive }) => ({color: isActive ? '#9f0013' : 'inherit' })}
    to='/comics'>Comics</NavLink></li>
</ul> */}