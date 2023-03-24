import styled from 'styled-components';

export const Movies = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0;
  @media (min-width: 768px) {
    margin-top: 1.25rem;
  }
`;

export const CardsContainer = styled.div`
  max-width: 86vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
