import Pricing from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render.theme';

describe('<Pricing />', () => {
  it('should render', () => {
    renderTheme(<Pricing>Children</Pricing>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
