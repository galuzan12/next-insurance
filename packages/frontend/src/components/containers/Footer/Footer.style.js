import styled from 'styled-components';

import {raisinBlackColor, whiteColor} from '../../../config/colors';

export const FooterContainer = styled.footer`
  background-color: ${raisinBlackColor};
  color: ${whiteColor};
  font-family: Georgia, 'Times New Roman', Times, serif;
  text-align: center;
  padding: 2.5625rem 0 2.9375rem;
`;

export const IconContainer = styled.div`
  padding-bottom: 2.5625rem 0 1.6875rem;
  display: flex;
  justify-content: center;
`;

export const FooterTitle = styled.div`
  font-size: 2.0625rem;
  margin-top: 1.6875rem;
`;

export const SupportDetails = styled.div`
  font-size: 1rem;
  line-height: 1.3125rem;
  text-align: center;
  margin: 0.8125rem 0 2.375rem;
`;

export const Email = styled.div``;

export const OpeningHours = styled.div``;

export const FooterShareIcons = styled.div`
  display: flex;
  justify-content: center;
  > :not(:last-child) {
    margin-right: 2.375rem;
  }
`;
