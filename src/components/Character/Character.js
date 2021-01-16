import React from 'react';
import './Character.scss';

const Character = ({ id, details }) => {
  return (
    <article className='character-view'>
      <h1 className='view-header'>{ details.name }
      </h1>
    </article>
  )
}

export default Character;
