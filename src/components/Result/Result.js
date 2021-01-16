import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Result.scss';
import { info, plus } from '../../icons/icons.js';

const Result = ({ id, aliases, deck, images, name, publisher, realName, siteUrl }) => {

  const getRealName = (realName) => {
    return realName ? realName : 'Real name unknown';
  }

  return (
    <section className='result-card'>
      <div className='top-half'>
        <div className='name-div'>
          <h4>{ name }
          </h4>
          <p className='real-name'><i>{ getRealName(realName) }</i></p>
        </div>
        <div className='button-div'>
          <Link to={`/character/${id}`} className='button-link'>
            <p className='i-button'>{ info }
            </p>
          </Link>
          <p className='plus-button'>{ plus }
          </p>
        </div>
      </div>
      <div className='image-div'>
        <img
          className='image'
          alt={`character-image-${name}`}
          src={images.original_url}>
        </img>
      </div>
    </section>
  )
}

export default Result;
