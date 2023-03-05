import P from 'prop-types';
import Heading from '../Heading';
import SectionBackground from '../SectionBackground';
import TextComponent from '../TextComponent';
import * as Styled from './styles';

const GridContent = ({ title, html, background = false }) => {
  return (
    <SectionBackground>
      <Styled.Container>
        <Heading uppercase colorDark={!background}>
          {title}
        </Heading>
        <TextComponent>{html}</TextComponent>
      </Styled.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
};

export default GridContent;
