import SectionContact from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render.theme';

import dataSections from '../../api/data.json';
import { mapSectionContact } from '../../api/map-sections';
const section = dataSections[0].sections[6];

describe('<SectionContact />', () => {
  it('should render', () => {
    const data = mapSectionContact(section);
    const { container } = renderTheme(<SectionContact {...data} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
