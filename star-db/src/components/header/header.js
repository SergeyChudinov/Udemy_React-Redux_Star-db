import React from 'react';
import {Link, NavLink} from 'react-router-dom'; 

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
      {/* <a href="#">
        Star DB
      </a> */}
      <Link to='/'>
        <span>Star DB</span>
      </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <NavLink style={({ isActive }) => ({color: isActive ? '#9f0013'
          : '#00bc8c' })} end  to='/'>People</NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => ({color: isActive ? '#9f0013'
          : '#00bc8c' })} to='/planets'>Planets</NavLink>
        </li>
        <li>
          <NavLink style={({ isActive }) => ({color: isActive ? '#9f0013'
          : '#00bc8c' })} to='/starships'>Starships</NavLink>
        </li>
        {/* <li>
          <a href="#">People</a>
        </li>
        <li>
          <a href="#">Planets</a>
        </li>
        <li>
          <a href="#">Starships</a>
        </li> */}
      </ul>
    </div>
  );
};

export default Header;


{/* <Link to='/'>
  <span>Marvel</span> information portal
</Link>

<ul>
  <li>
    <NavLink style={({ isActive }) => ({color: isActive ? '#9f0013' : '#00bc8c' })}
    end  to='/'>People</NavLink>
  </li>
  <li>
    <NavLink style={({ isActive }) => ({color: isActive ? '#9f0013' : '#00bc8c' })}
    to='/planets'>Planets</NavLink>
  </li>
  <li>
    <NavLink style={({ isActive }) => ({color: isActive ? '#9f0013' : '#00bc8c' })}
    to='/starships'>Starships</NavLink>
  </li>
</ul> 


<a href="#">
  Star DB
</a>

<li>
  <a href="#">People</a>
</li>
<li>
  <a href="#">Planets</a>
</li>
<li>
  <a href="#">Starships</a>
</li> */}