import GridContent from '.';
import { renderTheme } from '../../styles/render.theme';

import { args } from './args';

describe('<GridContent />', () => {
  it('should render grid content', () => {
    const { container } = renderTheme(<GridContent {...args} />);
    expect(container).toMatchSnapshot();
  });

  it('should render background', () => {
    const { container } = renderTheme(
      <GridContent {...args} background={undefined} />
    );
    expect(container).toMatchSnapshot();
  });
});
