import Navbar from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render.theme';

describe('<Navbar />', () => {
  it('should render', () => {
    renderTheme(<Navbar>Children</Navbar>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});