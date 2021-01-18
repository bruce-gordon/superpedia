import React from 'react';
import Character from './Character.js';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { fakeData } from '../../utilities/fakeData.js';

describe('Character', () => {
  const mockUpdateSavedByChar = jest.fn();

  beforeEach(() => {
    render (
      <Character
        key={ `${match.params.id}1` }
        id={ `${match.params.id}` }
        details={ fakeData[0] }
        updateSaved={ mockUpdateSavedByChar }
        saved={ fakeData }
      />
    )
  })

})
