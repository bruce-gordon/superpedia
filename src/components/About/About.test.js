import React from 'react';
import About from './About.js';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('About', () => {
  it ('should render info about the app', () => {
    render (
      <About />
    )
    expect(screen.getByText('About Superpedia')).toBeInTheDocument();
    expect(screen.getByText('Welcome to Superpedia!')).toBeInTheDocument();
  })
})
