import styled from 'styled-components';

export const Modal = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.651);
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: ${({show}) => (show ? 'visible' : 'hidden')};

  > * {
    transform: ${({show}) => (show ? 'none' : 'translateX(31.25rem)')};
    transition: transform 1s;
  }
`;

export const ModalWrapper = styled.div``;
