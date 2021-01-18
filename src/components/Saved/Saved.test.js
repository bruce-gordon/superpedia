import React from 'react';
import Saved from './Saved.js';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { fakeData } from '../../utilities/fakeData.js';
import { MemoryRouter } from 'react-router-dom';

describe('Saved', () => {
  const mockFindCharacter = jest.fn();
  const mockUpdateSavedById = jest.fn();

  beforeEach(() => {
    render(
      <MemoryRouter>
        <Saved
          key={ `${fakeData[0].id}2` }
          id={ fakeData[0].id }
          aliases={ fakeData[0].aliases }
          deck={ fakeData[0].deck }
          images={ fakeData[0].image }
          name={ fakeData[0].name }
          publisher={ fakeData[0].publisher }
          realName={ fakeData[0].real_name }
          siteUrl={ fakeData[0].site_detail_url }
          findCharacter={ mockFindCharacter }
          updateSavedById={ mockUpdateSavedById }
        />
      </MemoryRouter>
    )
  });

  it('should render a card for each saved character', () => {
    expect(screen.getByText('Sabretooth')).toBeInTheDocument();
    expect(screen.getByText('Victor Creed')).toBeInTheDocument();
    expect(screen.getByAltText('Sabretooth')).toBeInTheDocument();
  });

  it('should update saved with the correct argument', () => {
    const saveBtn = screen.getByTestId('save-btn');
    expect(saveBtn).toBeInTheDocument();
    userEvent.click(saveBtn);
    expect(mockUpdateSavedById).toHaveBeenCalledTimes(1);
    expect(mockUpdateSavedById).toHaveBeenCalledWith(4563);
  })

  it('should navigate to Character view on button click', () => {
    const iBtn = screen.getByTestId('i-btn-link4563');
    expect(iBtn).toBeInTheDocument();
    userEvent.click(iBtn);
    expect(mockFindCharacter).toHaveBeenCalledTimes(1);
    expect(mockFindCharacter).toHaveBeenCalledWith(4563);

  })
})
