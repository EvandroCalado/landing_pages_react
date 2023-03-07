import Base from '.';
import { renderTheme } from '../../styles/render.theme';
import args from './mock';

describe('<Base />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Base {...args} />);
    expect(container).toMatchSnapshot();
  });
});
