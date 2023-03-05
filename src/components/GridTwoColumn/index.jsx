import P from 'prop-types';
import * as Styled from './styles';
import SectionBackground from '../SectionBackground';
import Heading from '../Heading';
import TextComponent from '../TextComponent';

const GridTwoColumn = ({ title, text, background = false, image }) => {
  return (
    <SectionBackground background={background}>
      <Styled.Container>
        <Styled.ImageContainer>
          <Heading uppercase colorDark={!background}>
            {title}
          </Heading>
          <TextComponent>{text}</TextComponent>
        </Styled.ImageContainer>
        <Styled.Image src={image} alt={title} />
      </Styled.Container>
    </SectionBackground>
  );
};

GridTwoColumn.propTypes = {
  title: P.string.isRequired,
  text: P.string.isRequired,
  image: P.string.isRequired,
  background: P.bool,
};

export default GridTwoColumn;
