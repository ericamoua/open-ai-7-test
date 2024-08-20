// Home.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Home from './pages/Home';

jest.mock('../public/lrnr-logo.png', () => 'mock-logo.png');

test('renders Home component correctly', () => {
  const { getByAltText } = render(<Home />);

  // Check that the logo image is rendered
  const logoImage = getByAltText('lrnr-logo');
  expect(logoImage).toBeInTheDocument();
  expect(logoImage).toHaveAttribute('src', 'mock-logo.png');
});
