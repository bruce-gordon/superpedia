import React from 'react';
import Navbar from './Navbar.js';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('Navbar', () => {

  beforeEach(() => {
    render (
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
  });

  it('should render nav buttons', () => {
    expect(screen.getByText('New Search'));
    expect(screen.getByText('Saved Supers'));
  })

  it('should render a title', () => {
    expect(screen.getByText('Superpedia!'));
  })

})
