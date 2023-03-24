import styled from 'styled-components';

import {blackColor} from '../../../config/colors';

export const MovieModalContainer = styled.div`
  width: 78.5vw;
  height: 82.5vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1.125rem 1.1875rem;
  background-color: white;
  overflow-y: auto;
  overflow-x: hidden;
  @media (min-width: 768px) {
    width: 71vw;
    padding: 3.125rem 10%;
    height: 62vh;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
`;

export const MovieModalLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  @media (min-width: 768px) {
    padding-right: 1.25rem;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: auto;
  min-width: 15.625rem;
  @media (min-width: 768px) {
    width: 24.875rem;
  }
`;

export const MovieModalRight = styled.div`
  max-width: 34.375rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const MovieModalHeaders = styled.div`
  font-size: 1.25rem;
  @media (min-width: 768px) {
    font-size: 1.5625rem;
  }
`;

export const MovieModalTitle = styled.div`
  font-size: 1.875rem;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 0.4375rem;
  @media (min-width: 768px) {
    margin-bottom: 0.625rem;
    font-size: 2.8125rem;
  }
`;

export const MovieModalRuntime = styled.div`
  margin-bottom: 0.75rem;
  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const MovieModalRating = styled.div`
  margin-bottom: 1.75rem;
`;

export const MovieModalDescription = styled.div`
  text-align: left;
  font-size: 1rem;
  font-family: Georgia, 'Times New Roman', Times, serif;
  letter-spacing: -0.6px;
  color: ${blackColor};
  text-transform: lowercase;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-bottom: 1.25rem;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 768px) {
    font-size: 1.875rem;
  }
`;

export const MovieModalButton = styled.div`
  margin: auto 0 0.625rem;
  @media (min-width: 768px) {
    width: 16.25rem;
  }
`;
