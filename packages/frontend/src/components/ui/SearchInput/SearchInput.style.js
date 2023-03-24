import styled from 'styled-components';
import {moonstoneColor, whiteColor} from '../../../config/colors';

export const SearchInputContainer = styled.div`
  padding: 0.625rem;
  width: 86vw;
`;

export const SearchInput = styled.input`
  border-radius: 1.5rem;
  text-align: center;
  height: 2.625rem;
  width: 100%;
  border: 0.125rem solid ${whiteColor};
  font-size: 1rem;
  box-shadow: 0.125rem 0.125rem 0.125rem ${moonstoneColor};
  &:focus{
    outline: none;
  }
  @media (min-width: 768px) {
  width: 31.25rem;
   
  }
`;
