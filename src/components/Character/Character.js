import React, { useState, useEffect } from 'react';
import './Character.scss';
import { plus } from '../../icons/icons.js';
import { getCharacterById } from '../../utilities/apiCalls.js';

const Character = ({ id, details, updateSaved }) => {
  const [charData, setCharData] = useState(details)

  useEffect(() => {
    getCharacterById(id)
    .then((data) => {setCharData(data.results)})
  }, [])

  const formatAliases = () => {
    return charData ? charData.aliases.replaceAll('\r\n', ', ') : '';
  }

  return (
    <section className='character-view'>
      {!charData &&
        <h1 className='view-header'>No character to   display --  Please try a new search
        </h1>}
      {charData &&
        <div>
          <h1 className='view-header'>{ charData.name }
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
                className='plus-container'
                onClick={ () => updateSaved(charData)}>
              { plus }
              </div>
            </div>
          </article>
        </div>
      }
      </section>
  )
 }

export default Character;
