import styled from 'styled-components';

export const CardRating = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.625rem;
  max-height: 1.375rem;
  @media (min-width: 768px) {
    max-height: 1.6875rem;
    margin-bottom: 1.25rem;
  }
`;

export const RatingText = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: ${({style})=> style ? style.fontSize : '1.25rem'};
  margin-left: 0.1875rem;
  line-height: 1.5rem;
  @media (min-width: 768px) {
    font-size: 1.875rem;
    margin-left: 0.375rem;
    line-height: 1.875rem;
  }
`;
