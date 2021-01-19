import React from 'react';
import Result from './Result.js';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { fakeData } from '../../utilities/fakeData.js';
import { MemoryRouter } from 'react-router-dom';

describe('Result', () => {
  const mockFindCharacter = jest.fn();
  const mockUpdateSavedById = jest.fn();

  beforeEach(() => {
    render (
      <MemoryRouter>
        <Result
          key={ 1 }
          id={ 17 }
          aliases={ 'Weapon X' }
          deck={ 'The best there is at what he does' }
          images={
            {
              tiny_url: "https://comicvine1.cbsistatic.com/uploads/square_mini/11131/111317321/7092103-creed.jpg",
              original_url: "https://comicvine1.cbsistatic.com/uploads/original/11131/111317321/7092103-creed.png"
            }
          }
          name={ 'Wolverine' }
          publisher={
            {
                api_detail_url: "https://comicvine.gamespot.com/api/publisher/4010-31/",
                id: 31,
                name: "Marvel"
            }
          }
          realName={ 'Logan' }
          siteUrl={ "https://comicvine.gamespot.com/sabretooth/4005-4563/" }
          findCharacter={ mockFindCharacter }
          updateSavedById={ mockUpdateSavedById }
          saved={ fakeData }
        />
      </MemoryRouter>
    )
  });

  it('should render a search result with correct data', () => {
    expect(screen.getByText('Wolverine')).toBeInTheDocument();
    expect(screen.getByText('Logan')).toBeInTheDocument();
    expect(screen.getByAltText('Wolverine')).toBeInTheDocument();
  })

  it('should update Saved with the correct id', () => {
    const saveBtn = screen.getByTestId('save-test');
    expect(saveBtn).toBeInTheDocument();
    userEvent.click(saveBtn);
    expect(mockUpdateSavedById).toHaveBeenCalledWith(17);
    expect(mockUpdateSavedById).toHaveBeenCalledTimes(1);
  })

  it('should call FindCharacter when user clicks the i', () => {
    const iBtn = screen.getByTestId('i-button');
    expect(iBtn).toBeInTheDocument();
    userEvent.click(iBtn);
    expect(mockFindCharacter).toHaveBeenCalledTimes(1);
    expect(mockFindCharacter).toHaveBeenCalledWith(17);
  })
})
