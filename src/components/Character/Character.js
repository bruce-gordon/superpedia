import React, { useState, useEffect } from 'react';
import './Character.scss';
import { plus } from '../../icons/icons.js';
import { getCharacterById } from '../../utilities/apiCalls.js';
import PropTypes from 'prop-types';

const Character = ({ id, details, updateSaved, saved }) => {
  const [charData, setCharData] = useState(details);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    getCharacterById(id)
    .then((data) => { setCharData(data.results) })
    .then(() => checkSaved())
  }, [])


  const formatAliases = () => {
    return charData ? charData.aliases.split('\r\n').join(', ') : '';
  }

  const handleClick = (charData) => {
    if (!isSaved) {
      updateSaved(charData);
      setIsSaved(true);
    } else {
      updateSaved(charData);
      setIsSaved(false);
    }
  }

  const checkSaved = () => {
    const storedChars = JSON.parse(localStorage.getItem('savedChars'));
    if (storedChars) {
      const check = storedChars.find(char => char.id === parseInt(id));
      (check) ? setIsSaved(true) : setIsSaved(false);
    }
  }

  const getStyling = () => {
    return (isSaved) ? 'saved-plus-container' : 'plus-container';
  }

  return (
    <section className='character-view'>
      {!charData &&
        <h1 className='view-header'>Loading character data --  Please wait or click New Search to try again
        </h1>}
      {charData &&
        <div className='character-area'>
          <h1 className='view-header-char'>{ charData.name }
          </h1>
          <article className='char-bio-area'>
            <div className='image-div-char'>
              <img
                className='image-char'
                alt={`${charData.name}`}
                src={charData.image.original_url}>
              </img>
            </div>
            <div className='char-info'>
              <p><b>Real name:</b> { charData.real_name }</p>
              <p><b>Aliases:</b> { formatAliases() }</p>
              <p><b>Publisher:</b> { charData.publisher.name }</p>
              <p>{ charData.deck }</p>
              <div className='link-container'>
                <a
                  href={ charData.site_detail_url }
                  target="_blank"
                  rel="noreferrer"
                  className='link-text'>
                  <p className='link-to-info'>
                    More information...
                  </p>
                </a>
              </div>
              <div
                data-testid='save-btn'
                className={ getStyling() }
                onClick={ () => handleClick(charData)}>
              { plus }
              </div>
            </div>
          </article>
        </div>
      }
      </section>
  )
}

Character.propTypes = {
  id: PropTypes.number,
  details: PropTypes.any,
  updateSaved: PropTypes.func.isRequired,
  saved: PropTypes.array
}

export default Character;
