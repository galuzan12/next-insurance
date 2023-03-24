import styled from 'styled-components';

import {blackColor, blizzardBlueColor} from '../../../config/colors';

export const CardButton = styled.div`
  border: 1px solid ${blackColor};
  border-radius: 6.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.375rem 0.875rem;
  width: 100%;
  cursor: pointer;

  :hover {
    background: ${blizzardBlueColor};
  }
  @media (min-width: 768px) {
    padding: 0.6875rem 1.1875rem;
  }
`;

export const ButtonText = styled.div`
  font-size: 0.8125rem;
  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;
