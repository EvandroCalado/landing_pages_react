import GridImage from '.';
import { renderTheme } from '../../styles/render.theme';

import { args } from './args';

describe('<GridImage />', () => {
  it('should render with background', () => {
    const { container } = renderTheme(<GridImage {...args} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without background', () => {
    const { container } = renderTheme(
      <GridImage {...args} background={undefined} />
    );
    expect(container).toMatchSnapshot();
  });
});
