import Table from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render.theme';

describe('<Table />', () => {
  it('should render table', () => {
    renderTheme(<Table />);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });
});
