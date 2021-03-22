import React from 'react';
import NavBar from './NavBar';
import {render} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// basic tests
it('renders without crashing', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
});

it('matches snapshot', function() {
  const container = render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  expect(container.asFragment()).toMatchSnapshot();
});
// end basic tests

// full render
it('mounts without crashing', function() {
  const { getByText } = render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );

  const blogLink = getByText(/snacks/i);
  expect(blogLink).toBeInTheDocument();
});
