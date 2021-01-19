import React from 'react';
import Search from './Search.js';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { fakeData } from '../../utilities/fakeData.js';
import { MemoryRouter } from 'react-router-dom';

describe('Search', () => {

  const mockGetCharacter = jest.fn();

    beforeEach(() => {
      render (
        <MemoryRouter>
          <Search
            getCharacter={ mockGetCharacter }
          />
        </MemoryRouter>
      )
  })

  it('should render the Search form', () => {
    const input = screen.getByLabelText('Enter the name of a superhero, supervillain, or comic character to get started.');
    const searchBtn = screen.getByText('Search');
    const header = screen.getByText('Information about your favorite comic book characters is at your fingertips')
    expect(input).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  })

  it('should search for user input', () => {
    const searchBtn = screen.getByText('Search');
    const input = screen.getByLabelText('Enter the name of a superhero, supervillain, or comic character to get started.');
    userEvent.type(input, 'batman');
    userEvent.click(searchBtn);
    expect(mockGetCharacter).toHaveBeenCalledWith('batman');

  })

  it('should not search without input', () => {
    const header = screen.getByText('Information about your favorite comic book characters is at your fingertips')
    const searchBtn = screen.getByText('Search');
    const input = screen.getByLabelText('Enter the name of a superhero, supervillain, or comic character to get started.');
    userEvent.click(searchBtn);
    expect(header).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
  })
})
