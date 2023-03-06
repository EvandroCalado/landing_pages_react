import GridSection from '.';
import { renderTheme } from '../../styles/render.theme';

import { args } from './args';

describe('<GridSection />', () => {
  it('should render with background', () => {
    const { container } = renderTheme(<GridSection {...args} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without background', () => {
    const { container } = renderTheme(<GridSection {...args} background={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
