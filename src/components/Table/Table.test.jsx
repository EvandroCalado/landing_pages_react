import Table from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render.theme';

describe('<Table />', () => {
  it('should render', () => {
    renderTheme(<Table>Children</Table>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});