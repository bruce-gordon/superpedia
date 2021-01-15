import React, { useState } from 'react';
import './ResultView.scss';
import Result from '../Result/Result.js';

const ResultView = ({ searchResults }) => {
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
      />
    )
  })

  return (
    <section
      className='result-view'>
      <h1 className='view-header'>Search Results
      </h1>
      { results }
    </section>
  )
}

export default ResultView;
