import Pricing from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render.theme';

import dataSections from "../../api/data.json"
const section = dataSections[0].sections[5]

describe('<Pricing />', () => {
  it('should render', () => {
    const {container} = renderTheme(<Pricing {...section} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot()
  });
});
