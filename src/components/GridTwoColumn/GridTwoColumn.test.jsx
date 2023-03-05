import GridTwoColumn from '.';
import { renderTheme } from '../../styles/render.theme';

import { args } from './args';

describe('<GridTwoColumn />', () => {
  it('should render two column grid', () => {
    const { container } = renderTheme(<GridTwoColumn {...args} />);
    expect(container).toMatchSnapshot();
  });
});
