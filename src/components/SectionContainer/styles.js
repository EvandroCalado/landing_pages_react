import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.large};
  `}
`;
