import React from 'react';
import FoodMenu from './FoodMenu';
import {render} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';


let snacks = [
    {
      "id": "nachos",
      "name": "Nachos",
      "description": "An American classic!",
      "recipe": "Cover expensive, organic tortilla chips with Cheez Whiz.",
      "serve": "Serve in a hand-thrown ceramic bowl, garnished with canned black olives"
    }]
// basic tests
it('renders without crashing', () => {
  render(
    <MemoryRouter>
      <FoodMenu snacks={snacks} title={"snacks"} />
    </MemoryRouter>
  );
});

it('matches snapshot', function() {
  const container = render(
    <MemoryRouter>
      <FoodMenu snacks={snacks} title={"snacks"} />
    </MemoryRouter>
  );
  expect(container.asFragment()).toMatchSnapshot();
});
// end basic tests

// full render
it('mounts without crashing', function() {
  const { getByText } = render(
    <MemoryRouter>
      <FoodMenu snacks={snacks} title={"snacks"} />
    </MemoryRouter>
  );

  const blogLink = getByText(/create/i);
  expect(blogLink).toBeInTheDocument();
  expect("nachos").toBeInTheDocument()
});
