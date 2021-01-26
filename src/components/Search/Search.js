import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.scss';
import PropTypes from 'prop-types';

const Search = ({ getCharacter }) => {
  const [charName, setCharName] = useState('');

  const handleChange = (event) => {
    setCharName(event.target.value);
  }

  const handleClick = (event) => {
    getCharacter(charName);
    clearInput();
  }

  const clearInput = () => {
    setCharName('');
  }

  const disableLink = () => {
    let isDisabled = charName ? 'submit-search-link' : 'disabled-link';
    return isDisabled
  }

  return (
    <section className='search-view'>
      <h1 className='view-header'>Search for Supers
      </h1>
      <h3 className='view-subheader'> Information about your favorite comic book characters is at your fingertips
      </h3>
      <form className='search-area'>
        <label
          className='search-instructions' htmlFor='search'>Enter the name of a superhero, supervillain, or comic character to get started.
        </label>
        <input
          type='text'
          name='search'
          id='search'
          placeholder='Character name...'
          className='search-input'
          value={ charName }
          onChange={ handleChange }>
        </input>
        <Link
          to='/results'
          className={ disableLink() }
          onClick={ handleClick }
          >Search
        </Link>
      </form>
    </section>
  )
}

Search.propTypes = {
  getCharacter: PropTypes.func.isRequired
}

export default Search;
