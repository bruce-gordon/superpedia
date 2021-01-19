import React  from 'react';
import './SavedView.scss';
import Saved from '../Saved/Saved.js';
import PropTypes from 'prop-types';

const SavedView = ({ saved, findCharacter, updateSavedById }) => {

  const savedChars = saved.map(char => {
    return (
      <Saved
        key={ `${char.id}2` }
        id={ char.id }
        aliases={ char.aliases }
        deck={ char.deck }
        images={ char.image }
        name={ char.name }
        publisher={ char.publisher }
        realName={ char.real_name }
        siteUrl={ char.site_detail_url }
        findCharacter={ findCharacter }
        updateSavedById={ updateSavedById }
      />
    )
  })

  return (
    <section
      className='saved-view'>
      <h1
        data-testid='saved-view-header'
        className='view-header'>Saved Supers
      </h1>
      <div className='saved-container'>
      { savedChars }
      </div>
    </section>
  )
}

SavedView.propTypes = {
  saved: PropTypes.array,
  findCharacter: PropTypes.func.isRequired,
  updateSavedById: PropTypes.func.isRequired
}

export default SavedView;
