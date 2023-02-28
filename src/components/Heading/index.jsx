import P from 'prop-types';
import * as Styled from './styles';

const Heading = ({ children }) => {
  return <Styled.Title>{children}</Styled.Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
};

export default Heading;
