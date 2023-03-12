import SectionContact from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render.theme';

describe('<SectionContact />', () => {
  it('should render', () => {
    renderTheme(<SectionContact>Children</SectionContact>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
