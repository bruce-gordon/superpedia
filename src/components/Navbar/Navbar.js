import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='nav-bar'>
      <h1 className='nav-title'>Superpedia!
      </h1>
      <h3 className='nav-sub-title'> Your guide for all things super
      </h3>
      <div className='nav-button-container'>
        <NavLink
          to='/'
          className='nav-link'
          exact activeClassName={'selected-link'}
        >New Search
        </NavLink>
        <NavLink
          to='/saved'
          className='nav-link'
          exact activeClassName={'selected-link'}
        >Saved Supers
        </NavLink>
        <NavLink
          to='/'
          className='nav-link'
        >Create Your Own Super
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar;
