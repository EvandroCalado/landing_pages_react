import Home from '.';
import { renderTheme } from '../../styles/render.theme';
import { screen } from '@testing-library/react';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {
    name: 'Olá',
  }).parentElement;
  expect(headingContainer).toMatchSnapshot()
});
