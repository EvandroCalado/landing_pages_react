import P from 'prop-types';
import Heading from '../Heading';
import SectionBackground from '../SectionBackground';
import TextComponent from '../TextComponent';
import * as Styled from './styles';

const GridContent = ({ title, html, sectionId, background = false }) => {
  return (
    <SectionBackground background={background} sectionId={sectionId}>
      <Styled.Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <Styled.Html>
          <TextComponent>{html}</TextComponent>
        </Styled.Html>
      </Styled.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
  sectionId: P.string
};

export default GridContent;
