import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    overflow-y: auto;
  `}
`;

export const Table = styled.table`
  ${({ theme }) => css`
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #ddd;
    color: ${theme.colors.primaryColor};
    background-color: ${theme.colors.white};
    text-transform: capitalize;

    caption {
      text-align: left;
      font-size: ${theme.font.sizes.small};
    }

    thead,
    tfoot {
      background-color: ${theme.colors.mediumGray};
    }

    td,
    th {
      padding: 0.5rem 1rem;
    }
  `}
`;
