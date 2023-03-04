import Menu from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render.theme';

describe('<Menu />', () => {
  it('should render', () => {
    renderTheme(<Menu>Children</Menu>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});