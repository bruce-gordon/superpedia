import React from 'react';
import ResultView from './ResultView.js';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { fakeData } from '../../utilities/fakeData.js';
import { MemoryRouter } from 'react-router-dom';

describe('ResultView', () => {
  const mockFindCharacter = jest.fn();
  const mockUpdateSavedById = jest.fn();

  beforeEach(() => {
    render (
      <MemoryRouter>
        <ResultView
          saved={ fakeData }
          searchResults={ fakeData }
          findCharacter={ mockFindCharacter }
          updateSavedById={ mockUpdateSavedById }
        />
      </MemoryRouter>
    )
  });

  it('should render a header', () => {
    expect(screen.getByText('Search Results')).toBeInTheDocument();
  });

  it('should render Results', () => {
    expect(screen.getByText('Elixir')).toBeInTheDocument();
    expect(screen.getByText('Victor Creed')).toBeInTheDocument();
  })
})
