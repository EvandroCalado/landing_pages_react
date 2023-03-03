import P from 'prop-types';
import * as Styled from './styles';

const SectionBackground = ({ children }) => {
  return (
    <Styled.Container>
      { children }
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
};

export default SectionBackground;