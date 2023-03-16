import Table from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render.theme';

import dataSections from '../../api/data.json';
const section = dataSections[0].sections[5].table;

describe('<Table />', () => {
  it('should render table', () => {
    const {container} = renderTheme(<Table table={section} />);
    expect(screen.getByRole('table')).toBeInTheDocument();
    expect(container).toMatchSnapshot()
  });

  it('should render table without data', () => {
    renderTheme(<Table table={undefined} />);
  });
});
