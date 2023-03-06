import Footer from '.';
import { renderTheme } from '../../styles/render.theme';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer>Children</Footer>);
    expect(container).toMatchSnapshot();
  });
});
