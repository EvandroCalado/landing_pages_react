import P from 'prop-types';
import * as Styled from './styles';
import MenuLink from '../MenuLink';

const Navbar = ({ links = [] }) => {
  return (
    <Styled.Container aria-label='Main menu'>
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </Styled.Container>
  );
};

Navbar.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    })
  ),
};

export default Navbar;
