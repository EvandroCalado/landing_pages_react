import P from 'prop-types';
import * as Styled from './styles';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import GoTop from '../../components/GoTop';

const Base = ({ links, logoData, html, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer footerHtml={html} />
      </Styled.Container>
      <GoTop />
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  html: P.string.isRequired,
};

export default Base;
