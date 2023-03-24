import styled from 'styled-components';

import {blackColor} from '../../../config/colors';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 9rem;
  margin: 0 0.2813rem 3.4375rem;

  @media (min-width: 768px) {
    margin: 0 0.4688rem 5.875rem;
    width: 16.25rem;
  }
`;
export const CardImgContainer = styled.div`
  height: 15.0625rem;
  display: flex;
  align-items: center;
  @media (min-width: 768px) {
    height: 24.0625rem;
  }
`;

export const CardImg = styled.img`
  src: ${props => props.src};
  height: auto;
  width: 100%;
`;

export const CardTitle = styled.div`
  font-family: Georgia, 'Times New Roman', Times, serif;
  color: ${blackColor};
  font-size: 1.25rem;
  text-align: start;
  margin: 0.625rem 0;
  @media (min-width: 768px) {
    font-size: 1.875rem;
    margin: 1.25rem 0;
  }
`;

export const BottomCard = styled.div`
  width: 100%;
  align-self: flex-end;
  margin-top: auto;
`;

export const Title = styled.span``;

export const Released = styled.span``;
