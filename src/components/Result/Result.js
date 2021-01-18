import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { info, plus } from '../../icons/icons.js';
import './Result.scss';

const Result = ({ id, aliases, deck, images, name, publisher, realName, siteUrl, findCharacter, updateSavedById, saved }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    checkSaved();
  }, []);

  const getRealName = (realName) => {
    return realName ? realName : 'Real name unknown';
  }

  const goToCharacter = () => {
    findCharacter(id);
  }

  const handleClick = (id) => {
    if (!isSaved) {
      updateSavedById(id);
      setIsSaved(true);
    } else {
      updateSavedById(id);
      setIsSaved(false);
    }
  }

  const checkSaved = () => {
    const check = saved.find(char => char.id === id);
    (check) ? setIsSaved(true) : setIsSaved(false);
  }

  const getStyling = () => {
    return (isSaved) ? 'button-link-saved' : 'button-link';
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
            data-testid='i-button'
            onClick={ goToCharacter }>{ info }
          </Link>
          <p
            data-testid='save-test'
            className={ getStyling() }
            onClick={ () => handleClick(id) }
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
