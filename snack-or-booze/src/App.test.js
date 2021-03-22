import React from 'react';
import { render, screen } from '@testing-library/react';
import App, {snacks, drinks} from './App';
import { MemoryRouter } from 'react-router-dom';

test('App renders', () => {
  render(<App />);
});

test('renders home page with menu item count', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes snacks={snacks} drinks={drinks} />
      </MemoryRouter>
    );
   
      expect(drinks.length).toBeInTheDocument();
    });


test('renders all snack names in the snack list', () => {
    render(
      <MemoryRouter initialEntries={["/snacks"]}>
        <Routes snacks={snacks} />
      </MemoryRouter>
    );
    const snackList = snacks.map(d => d.id);
    for (const id of snackList) {
      const linkElement = getByText(new RegExp(id, "i"));
      expect(linkElement).toBeInTheDocument();
    }
  });
  
  test('renders only Whiskey\'s info', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/dogs/whiskey"]}>
        <Routes dogs={dogs} />
      </MemoryRouter>
    );
    const whiskeyInfo = dogs.find(d => d.name === "Whiskey");
    const dukeInfo = dogs.find(d => d.name === "Duke");
  
    const liElement = getByText(new RegExp(whiskeyInfo.facts[0], "i"));
    expect(liElement).toBeInTheDocument();
  
    expect(screen.queryByText(new RegExp(dukeInfo.facts[0], "i"))).toBeNull();
  });
  
  test('renders home on a bad route', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={["/bad-route"]}>
        <Routes dogs={dogs} />
      </MemoryRouter>
    );
    const dogNames = dogs.map(d => d.name);
    for (const name of dogNames) {
      const linkElement = getByText(new RegExp(name, "i"));
      expect(linkElement).toBeInTheDocument();
    }
  });
  