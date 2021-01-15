import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Result.scss';
import { info, plus } from '../../icons/icons.js';

const Result = ({ id, aliases, deck, images, name, publisher, realName, siteUrl }) => {

  const getRealName = (realName) => {
    return realName ? realName : 'Unknown';
  }

  return (
    <section className='result-card'>
      <div className='top-half'>
        <div className='name-div'>
          <h4>{ name }
          </h4>
          <p className='real-name'><i>Real name:</i>
          </p>
          <p className='real-name'>{ getRealName(realName) }</p>
        </div>
        <div className='button-div'>
          <p className='result-button'>{ info }
          </p>
          <p className='result-button'>{ plus }
          </p>
        </div>
      </div>
      <div className='image-div'>
        <img
          className='image'
          src={images.original_url}>
        </img>
      </div>
    </section>
  )
}

export default Result;
