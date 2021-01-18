import React from 'react';
import SavedView from './SavedView.js';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { fakeData } from '../../utilities/fakeData.js';
import { MemoryRouter } from 'react-router-dom';

describe('SavedView', () => {
  const mockFindCharacter = jest.fn();
  const mockUpdateSavedById = jest.fn();

  beforeEach(() => {
    render (
      <MemoryRouter>
        <SavedView
          saved={ fakeData }
          findCharacter={ mockFindCharacter }
          updateSavedById={ mockUpdateSavedById }
        />
      </MemoryRouter>
    )
  });

  it('should render a header', () => {
    expect(screen.getByText('Saved Supers')).toBeInTheDocument();
  });

  it('should render Results', () => {
    expect(screen.getByText('Elixir')).toBeInTheDocument();
    expect(screen.getByText('Victor Creed')).toBeInTheDocument();
  })

  it('should be able to use buttons on Saved card', () => {
    const saveBtn = screen.getByTestId('i-btn-link4563');
    expect(saveBtn).toBeInTheDocument();
    userEvent.click(saveBtn);
    expect(mockFindCharacter).toHaveBeenCalledTimes(1);
    expect(mockFindCharacter).toHaveBeenCalledWith(4563);
  })
})
