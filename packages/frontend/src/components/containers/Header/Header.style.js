import styled from 'styled-components';

import nextMoviesLogo from '../../../assests/next-movies.png';

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
`;

export const NextMoviesLogo = styled.img.attrs({
  src: `${nextMoviesLogo}`
})`
  width: 100%;
  height: auto;
  margin: 0.875rem 0 0.875rem 0.5938rem;
  max-width: 9.8125rem;
  @media (min-width: 768px) {
    max-width: 16.2rem;
    margin: 1.4rem 0 1.4rem 9rem;
  }
`;
