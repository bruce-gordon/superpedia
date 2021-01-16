import React from 'react';
import './Character.scss';

const Character = ({ id, details }) => {
  const aliases = details.aliases.replaceAll('\r\n', ', ')

  return (
    <section className='character-view'>
      <h1 className='view-header'>{ details.name }
      </h1>
      <article className='char-bio-area'>
      <div className='image-div-char'>
        <img
          className='image-char'
          alt={`character-image-${details.name}`}
          src={details.image.original_url}>
        </img>
      </div>
      <div className='char-info'>
        <p><b>Real name:</b> { details.real_name }</p>
        <p><b>Aliases:</b> { aliases }</p>

      </div>
      </article>
    </section>
  )
}

export default Character;
