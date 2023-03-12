import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css``}
`;
export const InputsTop = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    gap: ${theme.spacings.small};

    label {
      font-size: ${theme.font.sizes.medium};
    }

    input {
      width: 100%;
      font-size: ${theme.font.sizes.large};
      padding: 1rem 2rem;
      margin-top: ${theme.spacings.small};
      margin-bottom: ${theme.spacings.xlarge};
      border: none;
      outline: none;
      transition: all 200ms ease-in-out;

      &:focus {
        box-shadow: 0 0 10px 1px ${theme.colors.secondaryColor};
      }

      &::placeholder {
        color: ${theme.colors.mediumGray};
      }
    }
    @media ${theme.media.medium} {
      flex-direction: column;
    }
  `}
`;

export const InputsBottom = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;

    label {
      font-size: ${theme.font.sizes.medium};
    }

    textarea {
      width: 100%;
      margin-top: ${theme.spacings.small};
      font-size: ${theme.font.sizes.large};
      padding: 1rem 2rem;
      margin-bottom: ${theme.spacings.xxlarge};
      border: none;
      outline: none;
      transition: all 200ms ease-in-out;

      &:focus {
        box-shadow: 0 0 10px 1px ${theme.colors.secondaryColor};
      }

      &::placeholder {
        color: ${theme.colors.mediumGray};
      }
    }
  `}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background-color: transparent;
    color: ${theme.colors.white};
    border: solid 5px ${theme.colors.white};
    padding: 1.5rem 2rem;
    font-size: ${theme.font.sizes.large};
    transition: all 300ms ease-in-out;
    cursor: pointer;

    :hover {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primaryColor};
    }

    @media ${theme.media.medium} {
      font-size: ${theme.font.sizes.medium};
      width: 100%;
    }
  `}
`;
