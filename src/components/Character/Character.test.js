import React from 'react';
import Character from './Character.js';
import { screen, render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { fakeData } from '../../utilities/fakeData.js';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { getCharacterById } from '../../utilities/apiCalls.js';
jest.mock('../../utilities/apiCalls.js');

describe('Character', () => {
  const mockUpdateSavedByChar = jest.fn();

  beforeEach( async () => {
    await act (async () => {
      getCharacterById.mockResolvedValueOnce({
        results: {
          "aliases": "Josh Foley\nJoshua Foley \nGolden Boy\nSlick\nElixir\n",
          "deck": "Elixir was one of the students at Xavier Institute and is known for his ability of biological manipulation which allows him to both restore life or take it on a whim, and is capable of incredible feats being one of the few active and confirmed Omega-level mutants. He is now a part of the New Mutant nation of Krakoa as a member of the Five.",
          "id": 4552,
          "image": {
              "icon_url": "https://comicvine1.cbsistatic.com/uploads/square_avatar/0/4226/131081-172690-elixir.jpg",
              "medium_url": "https://comicvine1.cbsistatic.com/uploads/scale_medium/0/4226/131081-172690-elixir.jpg",
              "screen_url": "https://comicvine1.cbsistatic.com/uploads/screen_medium/0/4226/131081-172690-elixir.jpg",
              "screen_large_url": "https://comicvine1.cbsistatic.com/uploads/screen_kubrick/0/4226/131081-172690-elixir.jpg",
              "small_url": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4226/131081-172690-elixir.jpg",
              "super_url": "https://comicvine1.cbsistatic.com/uploads/scale_large/0/4226/131081-172690-elixir.jpg",
              "thumb_url": "https://comicvine1.cbsistatic.com/uploads/scale_avatar/0/4226/131081-172690-elixir.jpg",
              "tiny_url": "https://comicvine1.cbsistatic.com/uploads/square_mini/0/4226/131081-172690-elixir.jpg",
              "original_url": "https://comicvine1.cbsistatic.com/uploads/original/0/4226/131081-172690-elixir.jpg",
              "image_tags": "All Images,Earth-616 Elixir"
          },
          "name": "Elixir",
          "publisher": {
              "api_detail_url": "https://comicvine.gamespot.com/api/publisher/4010-31/",
              "id": 31,
              "name": "Marvel"
          },
          "real_name": "Joshua Foley",
          "site_detail_url": "https://comicvine.gamespot.com/elixir/4005-4552/"
        }
      })

      render (
        <Router history={ createMemoryHistory()}>
          <Character
            key={ 45521 }
            id={ 4552 }
            details={ fakeData[0] }
            updateSaved={ mockUpdateSavedByChar }
            saved={ fakeData }
          />
        </Router>
      );
    });
  })

  it('should render data for selected Character', () => {
    expect(screen.getByText('Elixir')).toBeInTheDocument();
    expect(screen.getByAltText('Elixir')).toBeInTheDocument();
    expect(screen.getByText('Joshua Foley')).toBeInTheDocument();
    expect(screen.getByText('Marvel')).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should update saved characters when button is clicked', () => {
    const saveBtn = screen.getByTestId('save-btn');
    expect(saveBtn).toBeInTheDocument();
    userEvent.click(saveBtn);
    expect(mockUpdateSavedByChar).toHaveBeenCalledTimes(1);
  })

})
