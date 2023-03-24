import styled from 'styled-components';

import {blackColor, vividSkyBlueColor} from '../../../config/colors';

export const MoviesContainer = styled.div`
  background-color: ${vividSkyBlueColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 1.688rem;
  color: ${blackColor};
  text-transform: uppercase;
  line-height: 1.563rem;
  max-width: 86vw;
  margin-top: 2.125rem;
  @media (min-width: 768px) {
    font-size: 5rem;
    line-height: 4.125rem;
    max-width: 50vw;
    margin-top: 7.125rem;
  }
`;
