import React from 'react';
import { Link } from 'react-router-dom';
import { info, plus } from '../../icons/icons.js';
import './Saved.scss';

const Saved = ({ id, aliases, deck, images, name, publisher, realName, siteUrl, findCharacter, updateSavedById }) => {

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
            data-testid={`i-btn-link${id}`}
            name={`${id}-link`}
            className='button-link'
            onClick={ goToCharacter }>{ info }
          </Link>
          <p
            data-testid='save-btn'
            className='button-link-save'
            onClick={ () => updateSavedById(id) }
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

export default Saved;
