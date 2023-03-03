import LogoLink from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render.theme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    expect(screen.getByRole('link', { name: 'Olá mundo' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Olá mundo' })).toHaveAttribute(
      'href',
      '#target'
    );
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" image="image.jpg" />);
    expect(screen.getByRole('img', { name: 'Olá mundo' })).toHaveAttribute(
      'src',
      'image.jpg'
    );
  });

  it('should render match snapshot', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" image="image.jpg" />);
    expect(screen.getByRole('link', { name: 'Olá mundo' })).toMatchSnapshot();
  });
});
