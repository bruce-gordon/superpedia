import React from 'react';
import './ResultView.scss';
import Result from '../Result/Result.js';
import PropTypes from 'prop-types';

const ResultView = ({ searchResults, findCharacter, updateSavedById, saved }) => {
  const results = searchResults.map(result => {
    return (
      <Result
        key={ result.id }
        id={ result.id }
        aliases={ result.aliases }
        deck={ result.deck }
        images={ result.image }
        name={ result.name }
        publisher={ result.publisher }
        realName={ result.real_name }
        siteUrl={ result.site_detail_url }
        findCharacter={ findCharacter }
        updateSavedById={ updateSavedById }
        saved={ saved }
      />
    )
  })

  return (
    <section
      className='result-view'>
      <h1 className='view-header'>Search Results
      </h1>
      { searchResults.length > 0 &&
        <div className='result-container'>
          { results }
        </div>
      }
      {
        <h3 className='loading'>
          Please wait, your results are loading...<br/> or click "New Search" to try again.
        </h3>
      }
    </section>
  )
}

ResultView.propTypes = {
  saved: PropTypes.array,
  searchResults: PropTypes.array,
  findCharacter: PropTypes.func.isRequired,
  updateSavedById: PropTypes.func.isRequired
}

export default ResultView;
