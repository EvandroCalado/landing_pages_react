import P from 'prop-types';
import * as Styled from './styles';
import Heading from '../Heading';
import SectionBackground from '../SectionBackground';
import TextComponent from '../TextComponent';

const GridImage = ({ title, description, grid, background = false }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <Styled.Grid>
          {grid.map((item) => (
            <Styled.GridElement key={item.image}>
              <Styled.Image src={item.image} alt={item.altText} />
            </Styled.GridElement>
          ))}
        </Styled.Grid>
      </Styled.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  title: P.string.isRequired,
  description: P.string.isRequired,
  background: P.bool,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      image: P.string.isRequired,
    })
  ).isRequired,
};

export default GridImage;
