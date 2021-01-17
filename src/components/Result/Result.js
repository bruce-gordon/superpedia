import React from 'react';
import { Link } from 'react-router-dom';
import './Result.scss';
import { info, plus } from '../../icons/icons.js';

const Result = ({ id, aliases, deck, images, name, publisher, realName, siteUrl, findCharacter, updatedSaved }) => {

  const getRealName = (realName) => {
    return realName ? realName : 'Real name unknown';
  }

  const goToCharacter = () => {
    findCharacter(id);
  }

  return (
    <section className='result-card'>
      <div className='top-half'>
        <div className='name-div'>
          <h4 className='char-name'>{ name }
          </h4>
          <p className='real-name'><i>{ getRealName(realName) }</i></p>
        </div>
        <div className='button-div'>
          <Link
            to={`/character/${id}`}
            className='button-link'
            onClick={ goToCharacter }>{ info }
          </Link>
          <p
            className='button-link'
            onClick={ () => updatedSaved(id) }
          >{ plus }
          </p>
        </div>
      </div>
      <div className='image-div'>
        <img
          className='image'
          alt={`${name}`}
          src={images.original_url}>
        </img>
      </div>
    </section>
  )
}

export default Result;
