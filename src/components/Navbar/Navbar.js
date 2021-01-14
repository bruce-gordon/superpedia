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
        <button className='nav-button'>New Search
        </button>
        <button className='nav-button'>Saved Supers
        </button>
        <button className='nav-button'>Create Your Own Super
        </button>
      </div>
    </nav>
  )
}

export default Navbar;
