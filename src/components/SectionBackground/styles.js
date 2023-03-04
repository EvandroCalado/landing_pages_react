import styled, { css } from 'styled-components';

const containerBackgroundActivate = (theme) => css`
  background-color: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div`
  ${({ theme, background }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    min-height: 100vh;
    display: flex;
    align-items: center;
    ${background && containerBackgroundActivate(theme)};
  `}
`;
