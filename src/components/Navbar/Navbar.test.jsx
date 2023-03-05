import Navbar from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render.theme';
import { theme } from '../../styles/theme';

import { mock } from './mock';

describe('<Navbar />', () => {
  it('should render links', () => {
    renderTheme(<Navbar links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should render not links', () => {
    renderTheme(<Navbar />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should render styles', () => {
    renderTheme(<Navbar links={mock} />);
    expect(screen.getByText(/link 9/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.medium,
      }
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Navbar links={mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
