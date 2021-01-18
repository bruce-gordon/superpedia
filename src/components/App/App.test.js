import React from 'react';
import App from './App.js';
import Navbar from '../Navbar/Navbar.js';
import Search from '../Search/Search.js';
import { screen, render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { fakeData } from '../../utilities/fakeData.js';
import { MemoryRouter } from 'react-router-dom';
import { getData } from '../../utilities/apiCalls.js';
jest.mock('../../utilities/apiCalls.js')

describe('App', () => {

  const mockGetCharacter = jest.fn();
  const mockGetData = jest.fn();

  beforeEach( async () => {
    await act (async () => {
      getData.mockResolvedValueOnce({
        results: [{
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
        }]
      })

      render (
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
    });
  })

  it('should render the main page', () => {
    expect(screen.getByTestId('app-header')).toBeInTheDocument();
    expect(screen.getByText('Search for Supers')).toBeInTheDocument();
    expect(screen.getByText('Superpedia!')).toBeInTheDocument();
  })

  it('should render search results when user completes the Search form', async () => {
    const input = screen.getByPlaceholderText('Character name...');
    const searchBtn = screen.getByText('Search');
    expect(screen.queryByText('Elixir')).not.toBeInTheDocument();
    await act( async () => {
      userEvent.type(input, 'elixir');
      userEvent.click(searchBtn);
    });
    expect(screen.queryByText('Elixir')).toBeInTheDocument();
    expect(screen.getByText('Joshua Foley')).toBeInTheDocument();
  })

  it('should go to Saved view when user clicks Saved Supers button', () => {
    const savedSupers = screen.getByText('Saved Supers')
    expect(screen.queryByTestId('saved-view-header')).toEqual(null)
    userEvent.click(savedSupers);
    const savedViewHeader = screen.queryByTestId('saved-view-header');
    expect(savedViewHeader).toBeInTheDocument();
  })

  it('should go to home page when use clicks New Search', () => {
    const newSearchBtn = screen.getByText('New Search');
    const savedSupers = screen.getByText('Saved Supers');
    userEvent.click(savedSupers);
    const savedViewHeader = screen.queryByTestId('saved-view-header');
    expect(savedViewHeader).toBeInTheDocument();
    userEvent.click(newSearchBtn);
    expect(screen.getByText('Search for Supers')).toBeInTheDocument();

  })
})
