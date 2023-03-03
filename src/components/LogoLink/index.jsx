import P from 'prop-types';
import * as Styled from './styles';
import Heading from '../Heading';

const LogoLink = ({ text, image = '', link }) => {
  return (
    <Heading size="small" uppercase>
      <Styled.Container href={link}>
        {image ? <img src={image} alt={text} /> : text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  image: P.string,
  link: P.string.isRequired,
};

export default LogoLink;
