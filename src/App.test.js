import { render, screen } from '@testing-library/react';
import App from './App';
import {NavLinks} from './components/NavBar/NavLinks';

test('renders a navbar', () => {
  render(<App />);
  const navBar = screen.getByRole('navigation');
  expect(navBar).toBeInTheDocument();
});

//NAVBAR TESTS

test('if there is a PP homepage link, it will link to homepage', () => {
  render(<NavLinks />);
  const homepageLink = screen.getByRole('link', {name: /homepage/i});
  expect(homepageLink).toBeInTheDocument();
  expect(homepageLink).toHaveAttribute('href', '/');
});
