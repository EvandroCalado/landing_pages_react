import P from 'prop-types';
import * as Styled from './styles';
import Heading from '../Heading';
import SectionBackground from '../SectionBackground';
import TextComponent from '../TextComponent';

const GridImage = ({
  title,
  description,
  grid,
  sectionId,
  background = false,
}) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
          <TextComponent>{description}</TextComponent>
        </Heading>
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
  sectionId: P.string,
  grid: P.arrayOf(
    P.shape({
      image: P.string.isRequired,
      altText: P.string.isRequired,
    })
  ).isRequired,
};

export default GridImage;
