import MenuLink from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render.theme';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink link="https://www.google.com.br">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_self'
    );
  });

  it('should render open in a new tab', () => {
    renderTheme(
      <MenuLink link="https://www.google.com.br" newTab={true}>
        Children
      </MenuLink>
    );
    expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute(
      'target',
      '_blank'
    );
  });

  it('should render match snapshot', () => {
    renderTheme(
      <MenuLink link="https://www.google.com.br" newTab={false}>
        Children
      </MenuLink>
    );
    expect(screen.getByRole('link', { name: 'Children' })).toMatchSnapshot();
  });
});
