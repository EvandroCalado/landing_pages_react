import P from 'prop-types';
import * as Styled from './styles';
import SectionContainer from '../SectionContainer';
import LogoLink from '../LogoLink';
import Navbar from '../Navbar';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';

const Menu = ({ links = [], logoData }) => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Styled.Button visible={visible} onClick={() => setVisible(true)}>
        {visible ? <CloseIcon /> : <MenuIcon />}
      </Styled.Button>
      <Styled.Container visible={visible} onClick={() => setVisible(false)}>
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <Navbar links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};

Menu.propTypes = {
  ...Navbar.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};

export default Menu;
