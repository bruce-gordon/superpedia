import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Result.scss';
import { info, plus } from '../../icons/icons.js';

const Result = ({ id, aliases, deck, images, name, publisher, realName, siteUrl }) => {
  return (
    <section className='result-card'>
      <div className='top-half'>
        <div className='name-div'>
          <h4>{ name }
          </h4>
          <p>{ realName }
          </p>
        </div>
        <div className='button-div'>
          <button>{ info }
          </button>
          <button>{ plus }
          </button>
        </div>
      </div>
      <div>
        <img src={images.original_url}></img>
      </div>
    </section>
  )
}

export default Result;
