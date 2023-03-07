import P from 'prop-types';
import * as Styled from './styles';
import TextComponent from '../TextComponent';
import SectionContainer from '../SectionContainer';

const Footer = ({ footerHtml }) => {
  return (
    <Styled.Container>
      <SectionContainer>
        <TextComponent>{footerHtml}</TextComponent>
      </SectionContainer>
    </Styled.Container>
  );
};

Footer.propTypes = {
  footerHtml: P.node.isRequired,
};

export default Footer;
