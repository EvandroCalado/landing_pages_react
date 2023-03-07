import Menu from '.';
import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render.theme';

import { mock } from '../Navbar/mock';
import { theme } from '../../styles/theme';

const logoData = {
  text: 'logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('should render logo and Main menu', () => {
    const { container } = renderTheme(
      <Menu links={mock} logoData={logoData} />
    );
    expect(screen.getByRole('heading', { name: 'logo' })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' })
    ).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render menu mobile and button', () => {
    const { container } = renderTheme(
      <Menu links={mock} logoData={logoData} />
    );
    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.medium,
    });
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.medium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.medium,
    });
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.medium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should not render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);
    expect(
      screen.queryByRole('navigation', { name: 'Main menu' }).firstChild
    ).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
