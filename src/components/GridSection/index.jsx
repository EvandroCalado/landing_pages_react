import P from 'prop-types';
import * as Styled from './styles';
import SectionBackgound from '../SectionBackground';
import Heading from '../Heading';
import TextComponent from '../TextComponent';

const GridSection = ({ title, description, grid, background = false }) => {
  return (
    <SectionBackgound background={background}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((item) => (
            <Styled.GridElement key={item.title}>
              <Heading size="medium" colorDark={!background} as="h3">{item.title}</Heading>
              <TextComponent>{item.description}</TextComponent>
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackgound>
  );
};

GridSection.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  background: P.bool,
  grid: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      description: P.string.isRequired,
    })
  ).isRequired,
};

export default GridSection;
