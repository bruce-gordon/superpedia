import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Search.scss';

const Search = () => {
  return (
    <section className='search-view'>
      <h1 className='view-header'>Search for Supers
      </h1>
      <h3 className='view-subheader'> Information about your favorite comic book characters is at your fingertips
      </h3>
      <form className='search-area'>
        <label className='search-instructions' htmlFor='search'>Enter the name of a superhero, supervillain, or comic character to get started.
        </label>
        <input type='text' name='search' className='search-input'>
        </input>
        <button className='submit-search'>Search
        </button>
      </form>
    </section>
  )
}

export default Search;
