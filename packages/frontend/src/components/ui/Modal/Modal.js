import {useContext} from 'react';

import {ModalContext} from '../../../providers/ModalProvider/ModalContext';
import * as S from './Modal.style';

const Modal = () => {
  const {show, modal: Modal, hideModal} = useContext(ModalContext);

  const handleHideModal = () => {
    hideModal();
  };

  return (
    <>
      {
        <S.Modal show={show} onClick={handleHideModal}>
          <S.ModalWrapper show={show} onClick={e => e.stopPropagation()}>
            {Modal}
          </S.ModalWrapper>
        </S.Modal>
      }
    </>
  );
};
export default Modal;
