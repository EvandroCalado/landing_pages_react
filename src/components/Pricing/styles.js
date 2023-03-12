import styled, { css } from 'styled-components';
import { Container as TextComponent } from "../TextComponent/styles"

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 60.4rem;
    margin: 0 auto;

    ${TextComponent} {
      margin-bottom: ${theme.spacings.xlarge};
      text-align: center;
    }
  `}
`;

